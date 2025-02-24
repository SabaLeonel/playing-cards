import { MonsterType } from "../utils/monster.utils";

export class Monster {
    name: string = "My Pokemon";
    image : string = "assets/img/monster.png";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption: string = "N°001 Pokémon";

    attackName: string = "Quick Attack";
    attackStrength: number = 60;
    attackDescription: string = "If you opponent has any Benched Pokémon, choose 1 of them and this aatach does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)";
}
