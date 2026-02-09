import { Component, signal } from '@angular/core';
import { Cartes } from "./components/cartes/cartes";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [Cartes],
})
export class App {

}

 