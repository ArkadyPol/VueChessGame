import { drawBoard } from "@/canvas";
import { hor } from "@/chess";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import store from "../index";
import ChessPiece from "@/chess/chess-piece";
import { Vertical, Horizontal, ChessBoard, ChessColumn } from "@/types";

export interface IGameState {
  width: number;
  height: number;
  ctx: null | CanvasRenderingContext2D;
  chess: ChessPiece[];
  currentPiece: null | ChessPiece;
  isWhiteTurn: boolean;
}

enum Color {
  Yellow = "rgba(255,255,0,0.85)",
  Green = "rgba(0,255,0,0.85)",
  Red = "rgba(255,0,0,0.85)",
}

@Module({ dynamic: true, store, name: "game" })
class Game extends VuexModule implements IGameState {
  width = 480;
  height = 480;
  ctx = null as IGameState["ctx"];
  chess = ChessPiece.chess;
  currentPiece = null as IGameState["currentPiece"];
  isWhiteTurn = true;

  get hor() {
    return hor;
  }

  get chessBoard(): ChessBoard {
    let chessBoard = {} as ChessBoard;
    for (let x of hor) {
      chessBoard[x] = {} as ChessColumn;
      for (let i = 1; i < 9; i++) {
        chessBoard[x][i as Vertical] = 0;
      }
    }
    for (let chessPiece of this.chess) {
      chessBoard[chessPiece.x][chessPiece.y] = chessPiece.code;
    }
    return chessBoard;
  }

  @Mutation
  private setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  @Action
  private drawPiece([i, j]: [number, Vertical]) {
    if (this.chessBoard[hor[i]][j]) {
      this.ctx?.fillText(
        String.fromCharCode(this.chessBoard[hor[i]][j]),
        i * 60 + 5,
        60 * (9 - j) - 8
      );
    }
  }

  @Mutation
  private drawAllowedMoves() {
    if (this.ctx && this.currentPiece) {
      this.ctx.fillStyle = Color.Green;
      let x = hor.indexOf(this.currentPiece.x) * 60;
      let y = (8 - this.currentPiece.y) * 60;
      this.ctx.fillRect(x, y, 60, 60);
      for (let pos of this.currentPiece.allowedMoves) {
        if (ChessPiece.findPiece(pos.x, pos.y)) {
          this.ctx.fillStyle = Color.Red;
        } else this.ctx.fillStyle = Color.Yellow;
        let x = hor.indexOf(pos.x) * 60;
        let y = (8 - pos.y) * 60;
        this.ctx.fillRect(x, y, 60, 60);
      }
    }
  }

  @Action
  private drawChess() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      drawBoard(this.ctx);
      if (this.currentPiece) {
        this.drawAllowedMoves();
      }
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
  private startMove() {
    this.currentPiece?.startMove();
  }

  @Mutation
  private endMove(
    [chessX, chessY]: [Horizontal | undefined, Vertical | undefined] = [
      undefined,
      undefined,
    ]
  ) {
    if (this.currentPiece) {
      const { x, y } = this.currentPiece;
      let success = this.currentPiece.endMove([chessX, chessY]);
      if (!chessX || !success) return;
      if (x !== chessX || y !== chessY) this.isWhiteTurn = !this.isWhiteTurn;
    }
  }

  @Mutation
  private setCurrentPiece([chessX, chessY]: [Horizontal, Vertical]) {
    this.currentPiece = ChessPiece.findPiece(chessX, chessY) || null;
    if ((this.currentPiece?.color === "black") === this.isWhiteTurn)
      this.currentPiece = null;
  }

  @Mutation
  private unsetCurrentPiece() {
    this.currentPiece = null;
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
    this.setCurrentPiece([chessX, chessY]);
    if (this.currentPiece) {
      this.startMove();
    }
  }

  @Action
  onCanvasMouseMove([x, y]: [number, number]) {
    if (this.currentPiece && this.ctx) {
      this.drawChess();
      this.ctx.font = "50px Arial";
      this.ctx.fillStyle = "black";
      this.ctx.fillText(
        String.fromCharCode(this.currentPiece.codeInMove),
        x - 25,
        y + 15
      );
    }
  }

  @Action
  onCanvasMouseUp([x, y]: [number, number]) {
    let chessX = hor[Math.floor(x / 60)];
    let chessY = (8 - Math.floor(y / 60)) as Vertical;
    this.endMove([chessX, chessY]);
    this.unsetCurrentPiece();
    this.drawChess();
  }

  @Action
  onCanvasMouseLeave() {
    this.endMove();
    this.unsetCurrentPiece();
    this.drawChess();
  }
}

export default getModule(Game);
