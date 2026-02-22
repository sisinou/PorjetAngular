import { MonsterService } from './../../services/monster/monster';
import { MonsterType } from './../../utils/monster.utils';
import { MonsterModel } from './../../models/monster.model';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, of, Subscription, switchMap } from 'rxjs';
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
  private Subscription: Subscription = new Subscription();

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
    let saveObservable;
    if (this.monsterID === -1){
      saveObservable = this.monsterService.add(this.monster);
    } else {
      this.monster.id = this.monsterID;
      saveObservable = this.monsterService.update(this.monster);
    }
    const saveSubscription = saveObservable.subscribe(_ =>{
      this.navigateBack();
    });
    this.Subscription.add(saveSubscription);
  }

  navigateBack(){
    this.router.navigate(['/home'])
    
  }

  deleteMonster() {
    const dialogRef = this.dialog.open(DeleteMonsterConfirmationDialogue);
    dialogRef.afterClosed().pipe(
      filter(confirmation => confirmation),
      switchMap(_ => this.monsterService.delete(this.monsterID))
    ).subscribe(confirmation =>{
      this.navigateBack();
    })
  }


  ngOnInit(): void {
    const formValueSubscription = this.formGroup.valueChanges.subscribe(data =>{
      this.monster = Object.assign(new MonsterModel(), data)
    });
    this.Subscription.add(formValueSubscription);
    const routeSubscription = this.route.params.pipe(
      switchMap(params => { if (params['id']){
          this.monsterID = parseInt(params['id']);
          return this.monsterService.get(this.monsterID);
        }
        return of(null);
      })).subscribe(monster => { if(monster) {
          this.monster = monster;
          this.formGroup.patchValue(this.monster)
        } 
      });
      this.Subscription.add(routeSubscription);
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
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