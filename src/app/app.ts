import { Component, computed, effect, inject, model, OnDestroy, signal } from '@angular/core';
import { Cartes } from "./components/cartes/cartes";
import { MonsterModel } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login/login-service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
})
export class App implements OnDestroy{
  private router = inject(Router);
  loginService = inject(LoginService);
  private logOutSubscription: Subscription | null = null;

  logout() {
      this.logOutSubscription = this.loginService.logout().subscribe({
          next: _ => { this.navigateToLogin(); },
          error: _ => { this.navigateToLogin(); }
      });
  }

  navigateToLogin() {
      this.router.navigate(['login']);
  }

  navigateHome() {
      this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
      this.logOutSubscription?.unsubscribe();
  }

}


 