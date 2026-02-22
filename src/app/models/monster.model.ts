import { MonsterType } from "../utils/monster.utils";


export class MonsterModel  {

    id: number = -1;
    name : string = "Pikachu";
    image: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    type : MonsterType = MonsterType.Electric;
    hp : number = 40;
    figureCaption : string = "salameche";
    
    attackName : string = "boule de feu"; 
    attackStrength : number = 20;
    attackDescription : string = "The target is struck with slender...";

    copy(): MonsterModel {
        return Object.assign(new MonsterModel(), this);
    }

}