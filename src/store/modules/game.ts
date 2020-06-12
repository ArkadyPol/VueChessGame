import { drawBoard } from "@/canvas";
import arrangeChessPieces, {
  Chess,
  ChessPiece,
  hor,
  Horizontal,
  Vertical,
} from "@/chess";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import store from "../index";

export interface IGameState {
  width: number;
  height: number;
  ctx: null | CanvasRenderingContext2D;
  chess: Chess;
  currentPiece: 0 | ChessPiece;
  isWhiteTurn: boolean;
}

@Module({ dynamic: true, store, name: "game" })
class Game extends VuexModule implements IGameState {
  width = 480;
  height = 480;
  ctx = null as IGameState["ctx"];
  chess = arrangeChessPieces();
  currentPiece = 0 as IGameState["currentPiece"];
  isWhiteTurn = true;

  get hor() {
    return hor;
  }

  @Mutation
  private setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  @Mutation
  private drawPiece([i, j]: [number, Vertical]) {
    if (this.chess[hor[i]][j]) {
      this.ctx?.fillText(
        String.fromCharCode(this.chess[hor[i]][j]),
        i * 60 + 5,
        60 * (9 - j) - 8
      );
    }
  }

  @Action
  private drawChess() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      drawBoard(this.ctx);
      this.ctx.font = "50px Arial";
      this.ctx.fillStyle = "black";
      for (let i = 0; i < 8; i++) {
        for (let j = 1; j < 9; j++) {
          this.drawPiece([i, j as Vertical]);
        }
      }
    }
  }

  @Mutation
  private deletePiece([chessX, chessY]: [Horizontal, Vertical]) {
    this.chess[chessX][chessY] = 0;
  }

  @Mutation
  private putPiece([chessX, chessY]: [Horizontal, Vertical]) {
    this.chess[chessX][chessY] = this.currentPiece;
  }

  @Mutation
  private setCurrentPiece(piece: 0 | ChessPiece) {
    this.currentPiece = piece;
  }

  @Action
  initializeGame(ctx: CanvasRenderingContext2D) {
    this.setContext(ctx);
    this.drawChess();
  }

  @Action
  onCanvasMouseDown([x, y]: [number, number]) {
    let chessX = hor[Math.floor(x / 60)];
    let chessY = (8 - Math.floor(y / 60)) as Vertical;
    if (this.chess) {
      this.setCurrentPiece(this.chess[chessX][chessY]);
      if (this.currentPiece) {
        this.deletePiece([chessX, chessY]);
      }
    }
  }

  @Action
  onCanvasMouseMove([x, y]: [number, number]) {
    if (this.currentPiece && this.ctx) {
      this.drawChess();
      this.ctx.font = "50px Arial";
      this.ctx.fillStyle = "black";
      this.ctx.fillText(String.fromCharCode(this.currentPiece), x - 25, y + 15);
    }
  }

  @Action
  onCanvasMouseUp([x, y]: [number, number]) {
    let chessX = hor[Math.floor(x / 60)];
    let chessY = (8 - Math.floor(y / 60)) as Vertical;
    this.putPiece([chessX, chessY]);
    this.setCurrentPiece(0);
    this.drawChess();
  }

  @Action
  onCanvasMouseLeave() {
    this.setCurrentPiece(0);
    this.drawChess();
  }
}

export default getModule(Game);
