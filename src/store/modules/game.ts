import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from "vuex-module-decorators";
import store from "../index";
import { drawBoard } from "@/canvas";

type Vertical = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type Horizontal = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

const hor = ["a", "b", "c", "d", "e", "f", "g", "h"] as Horizontal[];

enum ChessPiece {
  WhiteKing = 9812,
  WhiteQueen,
  WhiteRook,
  WhiteBishop,
  WhiteKnight,
  WhitePawn,
  BlackKing,
  BlackQueen,
  BlackRook,
  BlackBishop,
  BlackKnight,
  BlackPawn,
}

type ChessColumn = {
  [key in Vertical]: ChessPiece | 0;
};

type Chess = {
  [key in Horizontal]: ChessColumn;
};

export interface IGameState {
  width: number;
  height: number;
  ctx: null | CanvasRenderingContext2D;
  chess: null | Chess;
}

@Module({ dynamic: true, store, name: "game" })
class Game extends VuexModule implements IGameState {
  width = 480;
  height = 480;
  ctx = null as IGameState["ctx"];
  chess = null as IGameState["chess"];

  get hor() {
    return hor;
  }

  @Mutation
  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  @Mutation
  arrangeChessPieces() {
    if (this.ctx) {
      let chess = {} as Chess;
      for (let i of hor) {
        chess[i] = {} as ChessColumn;
        for (let j = 3; j < 7; j++) {
          chess[i][j as Vertical] = 0;
        }
      }
      chess["a"][8] = ChessPiece.BlackRook;
      chess["b"][8] = ChessPiece.BlackKnight;
      chess["c"][8] = ChessPiece.BlackBishop;
      chess["d"][8] = ChessPiece.BlackQueen;
      chess["e"][8] = ChessPiece.BlackKing;
      chess["f"][8] = ChessPiece.BlackBishop;
      chess["g"][8] = ChessPiece.BlackKnight;
      chess["h"][8] = ChessPiece.BlackRook;
      for (let i = 0; i < 8; i++) {
        chess[hor[i]][7] = ChessPiece.BlackPawn;
      }
      for (let i = 0; i < 8; i++) {
        chess[hor[i]][2] = ChessPiece.WhitePawn;
      }
      chess["a"][1] = ChessPiece.WhiteRook;
      chess["b"][1] = ChessPiece.WhiteKnight;
      chess["c"][1] = ChessPiece.WhiteBishop;
      chess["d"][1] = ChessPiece.WhiteQueen;
      chess["e"][1] = ChessPiece.WhiteKing;
      chess["f"][1] = ChessPiece.WhiteBishop;
      chess["g"][1] = ChessPiece.WhiteKnight;
      chess["h"][1] = ChessPiece.WhiteRook;
      this.chess = chess;
    }
  }

  @Mutation
  drawPiece([i, j]: [number, number]) {
    if (this.chess && this.chess[hor[i]][j as Vertical]) {
      this.ctx?.fillText(
        String.fromCharCode(this.chess[hor[i]][j as Vertical]),
        i * 60 + 5,
        60 * (9 - j) - 8
      );
    }
  }

  @Action
  drawChess() {
    if (this.ctx) {
      drawBoard(this.ctx);
      this.ctx.font = "50px Arial";
      this.ctx.fillStyle = "black";
      for (let i = 0; i < 8; i++) {
        for (let j = 1; j < 9; j++) {
          this.drawPiece([i, j]);
        }
      }
    }
  }

  @Action
  initializeGame(ctx: CanvasRenderingContext2D) {
    this.setContext(ctx);
    this.arrangeChessPieces();
    this.drawChess();
  }
}

export default getModule(Game);
