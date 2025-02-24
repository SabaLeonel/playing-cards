export enum MonsterType {
    PLANT = "plant",
    FIRE = "fire",
    WATER = "water",
    ELECTRIC = "electric",
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
    [MonsterType.PLANT]: {
        imageUrl: 'assets/img/plant.png',
        color: 'rgba(135, 255, 124)',
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: 'assets/img/electric.png',
        color: 'rgba(255, 255, 104)',
    },
    [MonsterType.FIRE]: {
        imageUrl: 'assets/img/fire.png',
        color: 'rgba(255, 104, 124)',
    },
    [MonsterType.WATER]: {
        imageUrl: 'assets/img/water.png',
        color: 'rgba(135, 235, 124)',
    },
}
