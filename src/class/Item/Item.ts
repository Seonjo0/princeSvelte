import type { ItemName } from "../../type/Type";
import type { Pokemon } from "../Pokemon/Pokemon";

export abstract class Item{
    protected itemName: string;
    protected count: number;

    constructor(name: ItemName, count: number){
        this.itemName = name;
        this.count = count
    }
    
    abstract useItem(pokemon: Pokemon): void
}