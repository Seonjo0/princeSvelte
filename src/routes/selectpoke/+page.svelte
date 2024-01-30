<script context="module" lang="ts">
    import { goto } from "$app/navigation";
    import { writable, type Writable } from "svelte/store";
    import { myUser, myPokemon, enemyUser, enemyPokemon}  from "../../util/Store"
    import { Pokemon } from "../../class/Pokemon/Pokemon";
    import { PokeType } from "../../type/Type";
	import { User } from "../../class/User";
	import { StonePoke } from "../../class/Pokemon/StonePoke";
	import { ElectricPoke } from "../../class/Pokemon/ElectricPoke";
	import { WaterPoke } from "../../class/Pokemon/WaterPoke";
</script>

<script lang="ts">
    let userName: string;
    let myPokeName: string;
    let myPokeType: PokeType

    if($myUser){
        userName = $myUser.name;
    }

    function selectPoke(event: MouseEvent): void{
        const target = event.currentTarget as HTMLButtonElement;
        if(target.value == "0"){
            myPokeType = PokeType.Electric
        } else {
            myPokeType = PokeType.Water
        }
    }

    function makePoke(event: MouseEvent): void{
        if(myPokeType == PokeType.Electric){
            console.log("삐가츄고름")
            myPokemon.set(new ElectricPoke(myPokeName))
        } else {
            console.log("꼬북고름")
            myPokemon.set(new WaterPoke(myPokeName))
        }

        if($myPokemon){
            console.log($myPokemon)
        }
        
        if($myUser && $myPokemon){
            $myUser.setPokemon($myPokemon)
        }
    }

    function makeEnemySet(): void{
        enemyUser.set(new User("오바람", "male"))
        if (myPokeType === PokeType.Electric){
            enemyPokemon.set(new StonePoke("덜덜이"))
        } else {
            enemyPokemon.set(new ElectricPoke("타락한 피카츄"))
        }

        if($enemyUser && $enemyPokemon){
            $enemyUser.setPokemon($enemyPokemon)
        }
    }

    function whereToGo(event: MouseEvent): void{
        makeEnemySet();
        const target = event.currentTarget as HTMLButtonElement;
        if(target.value){
            goto(`/${target.value}`);
        }
    }
</script>

<div>
    <h1>반갑다 {userName} !</h1>
    <h1>너와 함께 할 포켓몬을 골라보렴!</h1>

    <div id="selectPokeContainer">
        <div class="pokeInfoContainer">
            <img src="img/pika.png" alt="피카츄사진">
            <button on:click={selectPoke} value="0">피카츄</button>
        </div>
        <div class="pokeInfoContainer">
            <img src="img/kkobu.png" alt="꼬부기사진">
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
        <button value="grassland" on:click={whereToGo}>초원</button>
        <button value="cave" on:click={whereToGo}>동굴</button>
    </div>
</div>


<style>
    #selectPokeContainer{
        display: flex;
        justify-content: space-evenly;
    }

    .pokeInfoContainer img, button {
        display: block;
        margin: auto;
    }

    .pokeInfoContainer img {
        width: 150px;
        height: 150px;
    }
</style>