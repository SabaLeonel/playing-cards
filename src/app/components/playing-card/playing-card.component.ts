import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';


@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  @Input() monster = new Monster();
  monsterTypeIcon: string = "assets/img/fire.png";
  backgroundColor: string = "rgba(255, 255, 104)";
}
