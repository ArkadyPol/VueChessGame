import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
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
    if (this.ctx) {
      let isWhite = true;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (!isWhite) {
            this.ctx.fillStyle = "brown";
            this.ctx.fillRect(j * 60, i * 60, 60, 60);
          }
          isWhite = !isWhite;
        }
        isWhite = !isWhite;
      }
    }
  }

  @Action
  initializeGame(ctx: CanvasRenderingContext2D) {
    this.setContext(ctx);
    this.drawBoard();
  }
}

export default getModule(Game);
