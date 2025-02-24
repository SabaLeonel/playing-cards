import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayingCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  monsters!: Monster[];
  count: number = 0;
  search: string = '';

  selectedMonsterIndex = 0

  constructor() {

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pikachu";
    monster1.hp = 40;
    monster1.figureCaption = "N°001 Pikachu";

    const monster2 = new Monster();
    monster2.name = "Charizard";
    monster2.image = "assets/img/charizard.png";
    monster2.type = MonsterType.FIRE;
    monster2.hp = 60;
    monster2.figureCaption = "N°002 Charizard";

    const monster3 = new Monster();
    monster3.name = "Squirtle";
    monster3.type = MonsterType.WATER;
    monster3.hp = 30;
    monster3.figureCaption = "N°003 Squirtle";

    this.monsters.push(monster1, monster2, monster3);
  }

  increaseCount() {
    this.count++;
  }

  toggleMonster() {
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length;
  }
}
