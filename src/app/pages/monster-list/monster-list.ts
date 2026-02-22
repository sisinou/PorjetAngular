import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster';
import { MonsterModel } from '../../models/monster.model';
import { CommonModule } from '@angular/common';
import { Cartes } from '../../components/cartes/cartes';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-monster-list',
  imports: [CommonModule, Cartes, SearchBar, MatButtonModule],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.scss',
})
export class MonsterList {
  private monsterService = inject(MonsterService);
  private router = inject(Router);
   
  monsters = toSignal(this.monsterService.getAllMonsters());
  search = model('')

  filteredMonsters = computed(() => {
    return this.monsters()?.filter(monster => monster.name.includes(this.search())) ?? [];
  });

  addMonster() {
    this.router.navigate(['/Monster']);

  }

  openMonster(monster: MonsterModel) {
    this.router.navigate(['/Monster', monster.id]);
  }
}
