<template>
  <div class="game-wrapper">
    <Coords class="vert-coords" />
    <Coords class="hor-coords" />
    <div class="canvas-wrapper">
      <canvas :width="width" :height="height" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Coords from "./Coords/Coords.vue";
import game from "@/store/modules/game";

@Component({
  components: { Coords }
})
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
.canvas-wrapper {
  grid-area: canvas;
}

canvas {
  border: 3px solid black;
}
</style>

<style>
.game-wrapper {
  display: grid;
  width: fit-content;
  grid-template-areas:
    "left canvas"
    ". bottom";
  grid-template-columns: 30px 1fr;
  grid-template-rows: 1fr 30px;
  margin-left: 10px;
  margin-top: 10px;
}
</style>