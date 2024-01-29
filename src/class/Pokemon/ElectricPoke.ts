import type { Pocket } from "../../interface/Pocket";
import { PokeType } from "../../type/Type";
import { Potion } from "../Item/Potion";
import { Pokemon } from "./Pokemon";

export class ElectricPoke extends Pokemon{
    constructor(name: string) {
        super(name, PokeType.Electric);
    }
}