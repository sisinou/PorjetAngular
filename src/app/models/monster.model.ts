import { MonsterType } from "../utils/monster.utils";

export class Monster {
    name : string = "Pikachu";
    image: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    type : MonsterType = MonsterType.Electric;
    hp : number = 40;
    figureCaption : string = "salameche";
    
    attackName : string = "boule de feu"; 
    attackDamage : number = 20;
    attackDescription : string = "The target is struck with slender...";

}