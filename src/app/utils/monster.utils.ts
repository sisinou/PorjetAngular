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
    [MonsterType.Fire]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fire.svg', color: 'red' },
    [MonsterType.Water]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/water.svg', color: 'rgb(33, 136, 177)' },
    [MonsterType.Grass]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/grass.svg', color: 'green' },
    [MonsterType.Electric]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/electric.svg', color: 'yellow' },
    [MonsterType.Psychic]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/psychic.svg', color: 'purple' },
    [MonsterType.Normal]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/normal.svg', color: 'gray' },
    [MonsterType.Fighting]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fighting.svg', color: 'brown' },
    [MonsterType.Flying]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/flying.svg', color: 'skyblue' },
    [MonsterType.Poison]: { imageUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/poison.svg', color: 'violet' },
};