import { PokePic, PokeType } from "../../type/Type";
import { Pokemon } from "./Pokemon";

export class ElectricPoke extends Pokemon{
    constructor(name: string) {
        super(name, PokeType.Electric);
        this.imageUrl = PokePic.Electric;
        this.dmg = 5;
        this.def = 4;
    }
}