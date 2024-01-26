import type { Pocket } from "../interface/Pocket";
import type { Pokemon } from "./Pokemon/Pokemon";

export class User{
    private name: string;
    private sex: boolean;
    private myPoke?: Pokemon
    private pocket: Pocket

    constructor(name: string, sex: boolean){
        this.name = name;
        this.sex = sex;
        this.pocket = {
            item: {"Hp Potion" : 1},
            gold: 1000    
        }
    }

    getPokemon(pokemon: Pokemon){
        this.myPoke = pokemon;
    }

    getItem(item: string, count: number){
        this.pocket = { {item} : count, ...this.pocket}
    }



}