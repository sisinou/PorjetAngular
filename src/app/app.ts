import { Component, signal } from '@angular/core';
import { Cartes } from "./components/cartes/cartes";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.component.scss'],
  imports: [Cartes, SearchBar],
})
export class App {
   
  monsters: Monster[];
  count : number = 0;
  search = "";

  selectedMonsterIndex = 1;

  constructor(){
    this.monsters = [];
    const monster1 = new Monster();
    monster1.name = "Salameche";
    monster1.hp = 40;
    monster1.figureCaption = "n°002 pik ";
    this.monsters.push(monster1);

    
    const monster2 = new Monster();
    monster2.name = "Carapuce";
    monster2.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg";
    monster2.type = MonsterType.Water;
    monster2.hp = 60;
    monster2.figureCaption = "n°003 car ";
    this.monsters.push(monster2);
 
  }


  increaseCount(){
    this.count ++;
  }

  toggleMonster(){
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length;

  }

}
 