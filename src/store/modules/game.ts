import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from "vuex-module-decorators";
import store from "../index";

export interface IGameState {
  width: number;
  height: number;
  ctx: null | CanvasRenderingContext2D;
}

@Module({ dynamic: true, store, name: "game" })
class Game extends VuexModule implements IGameState {
  width = 480;
  height = 480;
  ctx = null as IGameState["ctx"];

  @Mutation
  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  @Mutation
  drawBoard() {
    this.ctx?.fillRect(100, 100, 60, 60);
  }
}

export default getModule(Game);
