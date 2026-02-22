import { MonsterType } from '../../utils/monster.utils';
import { MonsterModel } from './../../models/monster.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {

  monsters: MonsterModel[] = [];
  currentIndex: number = 1;

  constructor() {
    this.loadMonsters();
  }

  private saveMonsters(): void {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  getAllMonsters(): MonsterModel[] {
    return this.monsters.map(monster => monster.copy());
  }

  get(id: number): MonsterModel | undefined {
    const monster = this.monsters.find(monster => monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  private loadMonsters(): void {
    const monsterData = localStorage.getItem('monsters');
    if (monsterData){
      this.monsters = JSON.parse(monsterData).map((monsterJSON : any) => Object.assign(new MonsterModel(), monsterJSON));
      if (this.monsters.length === 0) {
        this.init();
        this.saveMonsters();
      } else {
        this.currentIndex = Math.max(...this.monsters.map(monster => monster.id)) + 1;
      }
    } else {
      this.init();
      this.saveMonsters();
    }
  }

  private init(){
    
        const monster1 = new MonsterModel();
        monster1.id = this.currentIndex++;
        monster1.name = "Carapuce";
        monster1.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg";
        monster1.type = MonsterType.Water;
        monster1.hp = 60;
        monster1.figureCaption = "n°003 car ";
        this.monsters.push(monster1);
    
        const monster2 = new MonsterModel();
        monster2.id = this.currentIndex++;
        monster2.name = "Pikachu";
        monster2.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg";
        monster2.type = MonsterType.Electric;
        monster2.hp = 60;
        monster2.figureCaption = "n°025 pikachu ";
        this.monsters.push(monster2);
    
    
        const monster3 = new MonsterModel();
        monster3.id = this.currentIndex++;
        monster3.name = "Bulbizarre";
        monster3.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
        monster3.type = MonsterType.Grass;
        monster3.hp = 60;
        monster3.figureCaption = "n°001 bulbizarre ";
        this.monsters.push(monster3);
    
        const monster4 = new MonsterModel();
        monster4.id = this.currentIndex++;
        monster4.name = "Salameche";
        monster4.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png";
        monster4.type = MonsterType.Fire;
        monster4.hp = 60;
        monster4.figureCaption = "n°004 salameche ";
        this.monsters.push(monster4);
    
        const monster5 = new MonsterModel();
        monster5.id = this.currentIndex++;
        monster5.name = "Evoli";
        monster5.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png";
        monster5.type = MonsterType.Normal;
        monster5.hp = 60;
        monster5.figureCaption = "n°133 evoli ";
        this.monsters.push(monster5);

  }

  add(monster: MonsterModel): MonsterModel {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentIndex++;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;
    this.saveMonsters();
    return monsterCopy;
  }

  update(monster : MonsterModel): MonsterModel | undefined {
    const monsterCopy = monster.copy();
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === monsterCopy.id);
    if (monsterIndex !== -1){
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.saveMonsters();
      return monsterCopy;
    }
     return undefined;
    
  }

  delete(id: number): void {
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === id);
    if (monsterIndex !== -1){
      this.monsters.splice(monsterIndex,1);
      this.saveMonsters();
    }
  }

}
