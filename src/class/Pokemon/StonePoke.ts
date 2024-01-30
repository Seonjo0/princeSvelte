import { PokePic, PokeType } from "../../type/Type";
import { Pokemon } from "./Pokemon";

export class StonePoke extends Pokemon{
    constructor(name: string) {
        super(name, PokeType.Stone);
        this.imageUrl = PokePic.Stone;
        this.dmg = 6;
        this.def = 2;
    }

    
}