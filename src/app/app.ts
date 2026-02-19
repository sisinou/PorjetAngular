import { Component, computed, effect, model, signal } from '@angular/core';
import { Cartes } from "./components/cartes/cartes";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, Cartes, SearchBar],
})
export class App {
   
  monsters: Monster[] = [];
  search = model('')
  filteredMonsters = computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search()))
  })
  constructor() {
    
    const monster1 = new Monster();
    monster1.name = "Carapuce";
    monster1.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg";
    monster1.type = MonsterType.Water;
    monster1.hp = 60;
    monster1.figureCaption = "n°003 car ";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Pikachu";
    monster2.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg";
    monster2.type = MonsterType.Electric;
    monster2.hp = 60;
    monster2.figureCaption = "n°025 pikachu ";
    this.monsters.push(monster2);


    const monster3 = new Monster();
    monster3.name = "Bulbizarre";
    monster3.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    monster3.type = MonsterType.Grass;
    monster3.hp = 60;
    monster3.figureCaption = "n°001 bulbizarre ";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "Salameche";
    monster4.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png";
    monster4.type = MonsterType.Fire;
    monster4.hp = 60;
    monster4.figureCaption = "n°004 salameche ";
    this.monsters.push(monster4);

    const monster5 = new Monster();
    monster5.name = "Evoli";
    monster5.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png";
    monster5.type = MonsterType.Normal;
    monster5.hp = 60;
    monster5.figureCaption = "n°133 evoli ";
    this.monsters.push(monster5);
 
  }


}
 