export enum PokeType {
    "Electric",
    "Water",
    "Fire",
    "Grass",
    "Stone"
}

export enum PokePic {
    "Electric" = "img/pika.png",
    "Water" = "img/kkobu.png",
    "Stone" = "img/longstone.png"
}

export enum BattleAction {
    "StandBy", 
    "Attack",
    "Defend",
    "Evade",
    "Run",
    "UseItem"
}

export enum ActionProbability{
    "evade" = 50, "run" = 25
}

export enum PotionCategory{
    "HP",
    "MP"
}

export type ItemName = 
    "HP Potion" | "MP Potion"