import type { Pocket } from "../../interface/Pocket";
import { PokeType } from "../../type/Type";
import { Pokemon } from "./Pokemon";

export class WaterPoke extends Pokemon{
    constructor(name: string, level: number, hp: number) {
        super(name, PokeType.Water);
    }

    
}