export enum PokeType {
    "Electric",
    "Water",
    "Fire",
    "Grass"
}

export enum BattleAction {
    "StandBy", 
    "Attack",
    "Defend",
    "Evade",
    "Run"
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