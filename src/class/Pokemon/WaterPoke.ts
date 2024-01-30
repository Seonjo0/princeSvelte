import { PokePic, PokeType } from "../../type/Type";
import { Pokemon } from "./Pokemon";

export class WaterPoke extends Pokemon{
    constructor(name: string) {
        super(name, PokeType.Water);
        this.imageUrl = PokePic.Water
        this.dmg = 5
        this.def = 3
    }
    
}