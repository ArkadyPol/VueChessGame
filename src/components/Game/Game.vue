<template>
  <div class="game-wrapper">
    <Coords class="vert-coords" :values="numArr" />
    <Coords class="hor-coords" :values="hor" />
    <div class="canvas-wrapper">
      <canvas
        :width="width"
        :height="height"
        ref="canvas"
        @mousedown="onCanvasMouseDown"
        @mousemove="onCanvasMouseMove"
        @mouseup="onCanvasMouseUp"
        @mouseleave="onCanvasMouseLeave"
      ></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
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
  get hor() {
    return game.hor.map(x => x.toUpperCase());
  }

  get numArr() {
    let numArr = [] as Number[];
    for (let i = 1; i < 9; i++) {
      numArr.push(i);
    }
    return numArr.reverse();
  }

  @Ref("canvas") canvas!: HTMLCanvasElement;

  mounted() {
    const ctx = this.canvas.getContext("2d");
    if (ctx) {
      game.initializeGame(ctx);
    }
  }

  onCanvasMouseDown(e: MouseEvent) {
    game.onCanvasMouseDown([e.offsetX, e.offsetY]);
  }

  onCanvasMouseMove(e: MouseEvent) {
    game.onCanvasMouseMove([e.offsetX, e.offsetY]);
  }

  onCanvasMouseUp(e: MouseEvent) {
    game.onCanvasMouseUp([e.offsetX, e.offsetY]);
  }

  onCanvasMouseLeave() {
    game.onCanvasMouseLeave();
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