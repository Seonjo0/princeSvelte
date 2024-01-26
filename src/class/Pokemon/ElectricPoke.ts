import type { Pocket } from "../../interface/Pocket";
import { PokeType } from "../../type/Type";
import { Pokemon } from "./Pokemon";

export class ElectricPoke extends Pokemon{
    constructor(name: string, level: number, hp: number) {
        let pocket: Pocket = {
            item: {"Fire Stone" : 1},
            gold: 0
        }
        super(name, level, hp, PokeType.Electric, pocket);
    }
}