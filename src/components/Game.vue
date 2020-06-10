<template>
  <canvas :width="width" :height="height" ref="canvas"></canvas>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Mutation } from "vuex-class";
import GameModule from "../store/modules/game";

@Component
export default class Game extends Vue {
  @State(state => state.game.width) width!: GameModule["width"];
  @State(state => state.game.height) height!: GameModule["height"];
  @Mutation setContext!: GameModule["setContext"];
  @Mutation drawBoard!: GameModule["drawBoard"];

  created() {
    this.width;
    this.height;
  }
  
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      this.setContext(ctx);
      this.drawBoard();
    }
  }
}
</script>

<style scoped>
canvas {
  border: 1px solid red;
  margin-left: 25px;
  margin-top: 10px;
}
</style>