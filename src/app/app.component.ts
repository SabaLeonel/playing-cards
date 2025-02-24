import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  monster1!: Monster;
  count: number = 0;
  search : string = '';

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Pikachu";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°002 Pokémon";
  }

  increaseCount() {
    this.count++;
  }
}
