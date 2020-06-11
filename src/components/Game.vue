<template>
  <canvas :width="width" :height="height" ref="canvas"></canvas>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
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
      game.initializeGame(ctx);
    }
  }
}
</script>

<style scoped>
canvas {
  border: 3px solid black;
  margin-left: 25px;
  margin-top: 10px;
}
</style>