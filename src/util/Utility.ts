import { ActionProbability } from "../type/Type";

export class Utility {
    static getProbability(percentage: number) : boolean {
        const random = Math.floor((Math.random() * 99) + 1);
        return random <= percentage
    }

    static getEvadeProbability(): boolean {
        return this.getProbability(ActionProbability.evade)
    }

    static getRunProbability(): boolean {
        return this.getProbability(ActionProbability.run)
    }
}