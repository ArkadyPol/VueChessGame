<template>
  <div id="app">
    <Game />
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Game from "./components/Game.vue";
import Component from "vue-class-component";

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