import { MonsterType } from "../utils/monster.utils";

export class Monster {
    name: string = "My Pokemon";
    image : string = "assets/img/monster.png";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption: string = "N°001 Pokémon";

    attackName: string = "Standard Attack";
    attackStrength: number = 60;
    attackDescription: string = "This is an attack description";
}
