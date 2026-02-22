import { MonsterService } from './../../services/monster/monster';
import { MonsterType } from './../../utils/monster.utils';
import { MonsterModel } from './../../models/monster.model';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cartes } from "../../components/cartes/cartes";
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMonsterConfirmationDialogue } from '../../components/delete-monster-confirmation-dialogue/delete-monster-confirmation-dialogue';

@Component({
  selector: 'app-monster',
  imports: [
    ReactiveFormsModule, 
    Cartes, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule],
  templateUrl: './monster.html',
  styleUrl: './monster.scss',
})
export class Monster implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private monsterService = inject(MonsterService);
  private readonly dialog = inject(MatDialog);

  private router = inject(Router);
  private formValueSubscription: Subscription | null = null;
  private routeSubscription: Subscription | null = null;

  monsterId = signal<number | undefined>(undefined);


  monster = new MonsterModel();

  formGroup = this.fb.group({
    name : [this.monster.name, Validators.required],
    hp : [this.monster.hp, [Validators.required, Validators.min(1), Validators.max(210)]],
    image : [this.monster.image, Validators.required],
    type : [this.monster.type, Validators.required],
    figureCaption : [this.monster.figureCaption, Validators.required],
    attackName : [this.monster.attackName, Validators.required],
    attackStrength : [this.monster.attackStrength,[Validators.required, Validators.min(5), Validators.max(150)]],
    attackDescription : [this.monster.attackDescription, Validators.required],
  });

  MonsterType = Object.values(MonsterType);
  monsterID= -1;

  submit(event: Event) {
    event.preventDefault();
    if (this.monsterID === -1){
      this.monsterService.add(this.monster);
    } else {
      this.monster.id = this.monsterID;
      this.monsterService.update(this.monster);
    }
    this.navigateBack();
  }

  navigateBack(){
    this.router.navigate(['/home'])
    
  }

  deleteMonster() {
    const dialogRef = this.dialog.open(DeleteMonsterConfirmationDialogue);
    dialogRef.afterClosed().subscribe(confirmation =>{
      if(confirmation){
        this.monsterService.delete(this.monsterID)
        this.navigateBack();
      }
    })
  }


  ngOnInit(): void {
    this.formValueSubscription = this.formGroup.valueChanges.subscribe(data =>{
      this.monster = Object.assign(new MonsterModel(), data)
    })
    this.routeSubscription = this.route.params.subscribe(params => {
      if(params['id']) {
        this.monsterID = parseInt(params['id']);
        this.monsterId.set(this.monsterID);
        const monsterFound = this.monsterService.get(this.monsterID);
        if(monsterFound) {
          this.monster = monsterFound;
          this.formGroup.patchValue(this.monster)
        } else {
          this.monsterID = -1; 
      }
    }});
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.formValueSubscription?.unsubscribe();

  }

  next() {
    let nextId = this.monsterId() || 0;
    nextId++;
    this.router.navigate(['/Monster/'+ nextId])
  }

  isFieldValid(name: string): boolean {
  const formControl = this.formGroup.get(name);
  return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string
        });
          };
        }
      }
}