import { Component, signal} from '@angular/core';

@Component({
  selector: 'app-cartes',
  imports: [],
  templateUrl: './cartes.html',
  styleUrl: './cartes.scss',
})

export class Cartes {

  name: string = "My pokemon";
  hp:number = 40;
  figureCaption: string = "salameche";
  attackName: string = "Boule de Feu";
  attackDamage : number = 20;
  attackDescription: string = "The target is struck with slender...";
}
