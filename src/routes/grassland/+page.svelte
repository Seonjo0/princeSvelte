<script context="module" lang="ts">
    import type { MouseEventHandler } from "svelte/elements";
    import { goto } from "$app/navigation";
    import { writable, type Writable } from "svelte/store";
    import { myUser, enemyUser, enemyPokemon } from "../../util/Store"
    import { User } from "../../class/User";
	import type { Pokemon } from "../../class/Pokemon/Pokemon";
	import { BattleManager } from "../../interface/BattleManager";
	import { BattleAction } from "../../type/Type";
  </script>

<script lang="ts">
    let clientUser: User;
    let rivalUser: User;
    let clientPokemon: Pokemon | undefined;
    let rivalPokemon: Pokemon | undefined;
    let battleManager: BattleManager = new BattleManager();
    let keepGoingGame: boolean;

    myUser.subscribe(value => {
        if (value) {
            clientUser = value;
            clientPokemon = clientUser.getPokemon(0);
        }
    });

    enemyUser.subscribe(value => {
        if (value) {
            rivalUser = value;
            rivalPokemon = rivalUser.getPokemon(0);
        }
    });

    $: if (clientPokemon && rivalPokemon) {
        if (clientPokemon.currentAction != BattleAction.StandBy || rivalPokemon.currentAction != BattleAction.StandBy) {
            keepGoingGame = battleManager.manageBattle(clientPokemon, rivalPokemon);
        }
    }

    $: if (keepGoingGame != true){
        const div = document.getElementById("allOfGame")
        if(div){
            div.style.display = "none";
        }
    }

    function changePokeCurrentAction(event: MouseEvent): void {
        const target = event.currentTarget as HTMLButtonElement;
        if (clientPokemon) {
            clientPokemon.currentAction = parseInt(target.value) as BattleAction;
        }
        if (rivalPokemon){
            rivalPokemon.currentAction = BattleAction.Attack;
        }
    }

</script>

<div id="allOfGame">
    <div>
        <h1>기분좋은 산뜻한 바람이 불어온다</h1>
        <h1>그 때, 갑자기 뒤에서 인기척이 느껴진다...</h1>
        <h1 class="rival">"오랜만이다, {clientUser? clientUser.name : ""}"</h1>
    </div>

    <div>
        <h1>아니... 저 녀석은..?</h1>
        <h1>나의 어린시절을 함께한 {rivalUser? rivalUser.name : ""}녀석이군....</h1>
        <h1 class="rival">너도 트레이너가 됐다고 들었어, 그럼.. 한 판 붙어볼까!!!</h1>
        <h1>{rivalUser? rivalUser.name : ""}이 덤벼들었다!</h1>
    </div>

    <div>
        <div>
            {#if clientPokemon}
            <div>
                <div>{clientPokemon.name}</div>
                <div>{clientPokemon.level}</div>
                <img src={clientPokemon.imageUrl} alt="myPockpic">
                <progress max="50" value={clientPokemon.hp}></progress>
            </div>
            <div>
                {#each [1, 2, 3, 4, 5] as actionValue}
                    <button on:click={changePokeCurrentAction} value={actionValue}>
                        {BattleAction[actionValue]}
                    </button>
                {/each}
            </div>
            {:else}
                <div>포켓몬이 없습니다.</div>
            {/if}
        </div>
        <div>
            {#if rivalPokemon}
                <div>{rivalPokemon.name}</div>
                <div>{rivalPokemon.level}</div>
                <img src={rivalPokemon.imageUrl} alt="myPockpic">
                <progress max="50" value={rivalPokemon.hp}></progress>
            {:else}
                <div>포켓몬이 없습니다.</div>
            {/if}
        </div>
    </div>
</div>


<style>
    .rival {
        color: palevioletred;
    }
</style>
