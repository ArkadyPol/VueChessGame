<template>
  <div id="app">
    <Game />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "./components/Game/Game.vue";

@Component({
  components: {
    Game
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>