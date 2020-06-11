<template>
  <canvas :width="width" :height="height" ref="canvas"></canvas>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Mutation } from "vuex-class";
import game from "../store/modules/game";

@Component
export default class Game extends Vue {
  get width() {
    return game.width;
  }
  get height() {
    return game.height;
  }

  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      game.setContext(ctx);
      game.drawBoard();
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