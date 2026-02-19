import { MonsterType, MonsterTypeProperties } from './../../utils/monster.utils';
import { Monster } from './../../models/monster.model';
import { Component, Input, InputSignal, signal, input, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-cartes',
  imports: [],
  templateUrl: './cartes.html',
  styleUrl: './cartes.scss',
})

export class Cartes  implements OnChanges {

  @Input () monster = new Monster();
  monsterTypeIcon : string = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg";
  backgroundColor : string = "Yellow";

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['monster']){
      if (changes['monster'].previousValue?.type != changes['monster'].currentValue.type){ 
        this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
        this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
        }
    }
  }
}
