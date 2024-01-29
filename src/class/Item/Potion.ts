import { PotionCategory, type ItemName } from "../../type/Type";
import type { Pokemon } from "../Pokemon/Pokemon";
import { Item } from "./Item";

export class Potion extends Item{
    private potionType: PotionCategory

    constructor(name: ItemName, count: number, type: PotionCategory){
        super(name, count);
        this.potionType = type;
    }

    useItem(pokemon: Pokemon): void {
        this.count -= 1;
        if(this.potionType === PotionCategory.HP){
            pokemon.hp += 20;
        } else {
            pokemon.mp += 20;
        }
    }
}