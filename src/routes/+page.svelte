<script context="module">
    import { goto } from '$app/navigation';
  
    export function changeToInit() {
      goto('/init');
    }
  </script>
  
  <script lang='ts'>
    function handleClick() {
      changeToInit();
    }
  </script>
  
  <div>
    <h1> Pokemon Gold </h1>
    <button on:click={handleClick}>게임 시작하기</button>
  </div>
  
  <style>
    div {
      display: flex;
      flex-direction: column;
      margin-top: 300px;
    }
    h1 {
      margin: auto;
    }
    button {
      margin: auto;
      height: 45px;
      width: 200px;
    }
  </style>
  