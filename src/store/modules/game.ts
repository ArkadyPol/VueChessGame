import { Module, VuexModule, Mutation } from "vuex-module-decorators";

interface IGame {
  width: number;
}

@Module
export default class Game extends VuexModule implements IGame {
  width = 480;
  height = 480;
  ctx = null as null | CanvasRenderingContext2D;

  @Mutation
  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  @Mutation
  drawBoard() {
    this.ctx?.fillRect(100, 100, 60, 60);
  }
}
