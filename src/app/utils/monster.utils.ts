export enum MonsterType {
    Fire = "Fire",
    Water = "Water",
    Grass = "Grass",
    Electric = "Electric",
    Psychic = "Psychic",
    Normal = "Normal",
    Fighting = "Fighting",
    Flying = "Flying",
    Poison = "Poison",
}  


export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key in MonsterType]: IMonsterProperties} = {
    [MonsterType.Fire]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Fire_Type_Icon.svg', color: 'red' },
    [MonsterType.Water]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Water_Type_Icon.svg', color: 'blue' },
    [MonsterType.Grass]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Grass_Type_Icon.svg', color: 'green' },
    [MonsterType.Electric]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Electric_Type_Icon.svg', color: 'yellow' },
    [MonsterType.Psychic]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Psychic_Type_Icon.svg', color: 'purple' },
    [MonsterType.Normal]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Normal_Type_Icon.svg', color: 'gray' },
    [MonsterType.Fighting]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Fighting_Type_Icon.svg', color: 'brown' },
    [MonsterType.Flying]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Flying_Type_Icon.svg', color: 'skyblue' },
    [MonsterType.Poison]: { imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pok%C3%A9mon_Poison_Type_Icon.svg', color: 'violet' },
};