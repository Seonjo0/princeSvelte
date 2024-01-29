<script context="module" lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import { goto } from "$app/navigation";
  import { writable, type Writable } from "svelte/store";
  import { myUser } from "../../util/Store"
  import { User } from "../../class/User";
</script>

<script lang="ts">
    let userName: string = '';
    let gender: string = ''; // 'male' or 'female'

    function toggleWindow(windowName: string): MouseEventHandler<HTMLButtonElement> {
        return (event) => {
            const elements = document.getElementById(windowName);
            if (elements) {
                elements.style.display = elements.style.display === 'none' ? 'block' : 'none';
            }
            const elseElements = document.getElementById("userSexContainer")
            if (elseElements) {
                elseElements.style.display = "block";
            }
        };
    }

    function makeUserObj(): void{
      myUser.set(new User(userName, gender))
      goto(`/selectpoke`);
    }

</script>

<div id="userName">
    <h1>반갑다 모험가! 너의 이름은 무엇인가?</h1>
    <h3>나의 이름은.....{userName}</h3>
    <input bind:value={userName}>
    <button on:click={toggleWindow("userName")}>다음</button>
</div>

<div id="userSexContainer" style="display: none;">
  <div id="userSex">
      <h1>반갑다 {userName}! 너는 남자아이... 아니 여자아이 같은데....?</h1>
      <div style="display: flex; flex-direction: row; justify-content: center">
        <div class="radioBox">
          <div>남자</div>
          <input type="radio" name="gender" bind:group={gender} value="male" style="margin-top: 0;">
        </div>
        <div class="radioBox">
          <div>여자</div>
          <input type="radio" name="gender" bind:group={gender} value="female" style="margin-top: 0;">
        </div>        
      </div>
      <h3>{gender? (gender == "male" ? "남자" : "여자") : "저는..."}에요.</h3>
      <button on:click={makeUserObj}>다음</button>
  </div>
</div>

<style>
    #userName, #userSex {
      display: flex;
      flex-direction: column;
      margin-top: 300px;
    }

    div > input{
      margin: auto;
      margin-top: 50px;
      height: 45px;
      width: 200px;
    }

    div > h1, h3 {
      margin: auto;
    }
    
    div > button {
      margin: auto;
      margin-top: 50px;
      height: 45px;
      width: 200px;
    }

    .radioBox {
      display: flex; 
      flex-direction: column; 
      align-items: center;
    }
</style>
