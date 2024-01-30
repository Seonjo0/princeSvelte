import type { Pokemon } from "../class/Pokemon/Pokemon";
import { BattleAction } from "../type/Type";

export class BattleManager{

    constructor(){

    }

    manageBattle(myPoke: Pokemon, enemyPoke: Pokemon): boolean{
        console.log(myPoke.currentAction, enemyPoke.currentAction)
        if(myPoke.currentAction === BattleAction.Attack){
            myPoke.attack(enemyPoke);
        } 
        if(enemyPoke.currentAction === BattleAction.Attack){
            enemyPoke.attack(myPoke);
        }
        return this.evaluateBattle(myPoke, enemyPoke)
    }

    private evaluateBattle(myPoke: Pokemon, enemyPoke: Pokemon): boolean{
        const myPokeHp = myPoke.hp;
        const enemyPokeHp = enemyPoke.hp;

        myPoke.currentAction = BattleAction.StandBy;
        enemyPoke.currentAction = BattleAction.StandBy;

        if(myPokeHp == 0 || enemyPokeHp == 0){
            console.log(`${myPokeHp === 0 ? `${myPoke.name}이(가) 쓰러졌다.` : `${myPoke.name}이(가) 쓰러졌다.`}`);
            return false
        } else {
            return true
        }
    }
}