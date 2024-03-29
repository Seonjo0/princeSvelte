import type { Pocket } from "../../interface/Pocket";
import { BattleAction, type PokeType } from "../../type/Type";
import { Utility } from "../../util/Utility";

export class Pokemon {
    name: string;
    level: number = 1;
    hp: number = 50;
    mp: number = 50;
    protected pokeType: PokeType;
    protected pocket: Pocket | undefined;
    protected isAlive: boolean = true;
    protected dmg: number
    protected def: number
    currentAction: BattleAction
    imageUrl: string = ""

    constructor(name: string, pokeType: PokeType, pocket?: Pocket) {
        this.name = name;
        this.pokeType = pokeType;
        this.dmg = 0;
        this.def = 0;
        this.currentAction = BattleAction.StandBy
    }

    attack(enemyPoke: Pokemon): void {
        enemyPoke.damaged(this)
    }

    damaged(attacker: Pokemon): void {
        let damage = attacker.dmg;
        if(this.currentAction === BattleAction.Defend){
            damage = (attacker.dmg - (this.def));
        }
        else if(this.currentAction === BattleAction.Evade){
            damage = Utility.getEvadeProbability()? 0 : attacker.dmg;

            this.currentAction = BattleAction.StandBy;
            if(!damage){
                return;
            }
        }
        else if(this.currentAction === BattleAction.Run){
            damage = Utility.getRunProbability()? 0 : attacker.dmg;

            this.currentAction = BattleAction.StandBy;
            if(!damage){
                return;
            }
        }
        
        const calculatedHp = this.hp - ( damage < 0 ? 0 : damage)
        this.hp = calculatedHp <= 0 ? 0 : calculatedHp;
    }

    defend(): void {
        this.currentAction = BattleAction.Defend;
    }

    evade(): void {
        this.currentAction = BattleAction.Evade;
    }

    run(): void {
        this.currentAction = BattleAction.Run;
    }

    useItem(name: string): void {
        this.currentAction = BattleAction.UseItem;
    }
}
