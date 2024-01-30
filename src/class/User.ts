import type { Pocket } from "../interface/Pocket";
import { Potion } from "./Item/Potion";
import type { Pokemon } from "./Pokemon/Pokemon";
import { PotionCategory, type ItemName } from "../type/Type";

export class User{
    name: string;
    private sex: string;
    private myPoke?: Array<Pokemon>
    private pocket: Pocket

    constructor(name: string, sex: string){
        this.name = name;
        this.sex = sex;
        this.pocket = {
            item: [new Potion("HP Potion", 1, PotionCategory.HP), new Potion("MP Potion", 1, PotionCategory.MP)],
            gold: 1000    
        }
    }

    setPokemon(pokemon: Pokemon): void {
        if (!this.myPoke) {
            this.myPoke = [pokemon];
        } else {
            this.myPoke.push(pokemon);
        }
    }

    getPokemon(index: number): Pokemon | undefined {
        if (this.myPoke && index < this.myPoke.length) {
            return this.myPoke[index];
        } else {
            return undefined;
        }
    }

    getItem(item: string, count: number) {
        if (item === "gold") {
            this.pocket.gold += count;
        } else {
            this.pocket.item = { ...this.pocket.item, [item]: count };
        }
    }
}