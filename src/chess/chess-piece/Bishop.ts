import ChessPiece from ".";
import { Position, ChessCode, Horizontal, Vertical } from "@/types";
import { hor } from "..";

export default class Bishop extends ChessPiece {
  constructor(position: Position, color: "white" | "black") {
    super(
      position,
      color === "white" ? ChessCode.WhiteBishop : ChessCode.BlackBishop
    );
  }

  protected move(chessX: Horizontal, chessY: Vertical) {
    let id = this.allowedMoves.findIndex(
      (pos) => pos.x === chessX && pos.y === chessY
    );
    if (id === -1) return false;
    let otherPiece = ChessPiece.findPiece(chessX, chessY);
    if (otherPiece) {
      ChessPiece.deletePiece(chessX, chessY);
    }
  }

  get allowedMoves() {
    let moves = [] as Position[];
    let numX = hor.indexOf(this.x);
    for (let i = 1; this.y - i > 0 && numX - i > -1; i++) {
      moves.push({ x: hor[numX - i], y: (this.y - i) as Vertical });
      if (ChessPiece.findPiece(hor[numX - i], (this.y - i) as Vertical)) break;
    }
    for (let i = 1; this.y + i < 9 && numX - i > -1; i++) {
      moves.push({ x: hor[numX - i], y: (this.y + i) as Vertical });
      if (ChessPiece.findPiece(hor[numX - i], (this.y + i) as Vertical)) break;
    }
    for (let i = 1; this.y - i > 0 && numX + i < 8; i++) {
      moves.push({ x: hor[numX + i], y: (this.y - i) as Vertical });
      if (ChessPiece.findPiece(hor[numX + i], (this.y - i) as Vertical)) break;
    }
    for (let i = 1; this.y + i < 9 && numX + i < 8; i++) {
      moves.push({ x: hor[numX + i], y: (this.y + i) as Vertical });
      if (ChessPiece.findPiece(hor[numX + i], (this.y + i) as Vertical)) break;
    }

    return moves.filter(
      (pos) => ChessPiece.findPiece(pos.x, pos.y)?.color !== this.color
    );
  }
}
