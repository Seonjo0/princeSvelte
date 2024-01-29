<script context="module" lang="ts">
    import { goto } from "$app/navigation";
    import { writable, type Writable } from "svelte/store";
    import { myUser, myPokemon}  from "../../util/Store"
    import { Pokemon } from "../../class/Pokemon/Pokemon";
    import { PokeType } from "../../type/Type";
</script>

<script lang="ts">

    let userName: string;
    let myPokeName: string;
    let myPokeType: PokeType

    const unsubscribe = myUser.subscribe((value) => {
        if(value){
            userName = value.name;
        }
	});

    function selectPoke(event: MouseEvent): void{
        const target = event.currentTarget as HTMLButtonElement;
        if(target.value == "0"){
            myPokeType = PokeType.Electric
        } else {
            myPokeType = PokeType.Water
        }
    }

    function makePoke(event: MouseEvent): void{
        myPokemon.set(new Pokemon(myPokeName, myPokeType))
        const unsubscribe = myPokemon.subscribe((value) => {
        if(value){
            console.log(value)
        }
	});
    }
</script>

<div>
    <h1>반갑다 {userName} !</h1>
    <h1>너와 함께 할 포켓몬을 골라보렴!</h1>

    <div id="selectPokeContainer">
        <div>
            <div>피카사진</div>
            <button on:click={selectPoke} value="0">피카츄</button>
        </div>
        <div>
            <div>꼬북사진</div>
            <button on:click={selectPoke} value="1">꼬부기</button>
        </div>
    </div>
    <div id="inputPokeName">
        <div>이 포켓몬의 이름은 무엇이니?</div>
        <input bind:value={myPokeName}>
        <button on:click={makePoke}>다음</button>
    </div>

    <div id="goodByeToTrainer">
        <div>좋아 {userName}, 너와 {myPokeName}의 모험을 진심으로 응원한다.</div>
        <div>앞으로의 여정동안 용기를 잃지 말렴. . .</div>
    </div>

    <div id="whereToGo">
        <h1>어디로 떠나볼까?</h1>
        <button>초원</button>
        <button>동굴</button>
    </div>
</div>


<style>
    #selectPokeContainer{
        display: flex;
    }
</style>