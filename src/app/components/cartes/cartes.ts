import { MonsterType, MonsterTypeProperties } from './../../utils/monster.utils';
import { Monster } from './../../models/monster.model';
import { Component, Input, InputSignal, signal, input, OnInit, OnChanges, SimpleChanges, computed } from '@angular/core';


@Component({
  selector: 'app-cartes',
  imports: [],
  templateUrl: './cartes.html',
  styleUrl: './cartes.scss',
})

export class Cartes {

  monster = input(new Monster());
  monsterTypeIcon = computed(()=> MonsterTypeProperties[this.monster().type].imageUrl);
  backgroundColor = computed(() => MonsterTypeProperties[this.monster().type].color);


}
