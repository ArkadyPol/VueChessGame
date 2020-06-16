import ChessPiece from ".";
import { Position, ChessCode, Horizontal, Vertical } from "@/types";
import { hor } from "..";

export default class Rook extends ChessPiece {
  constructor(position: Position, color: "white" | "black") {
    super(
      position,
      color === "white" ? ChessCode.WhiteRook : ChessCode.BlackRook
    );
  }
  
  get allowedMoves() {
    let moves = [] as Position[];
    let numX = hor.indexOf(this.x);
    for (let i = 1; this.y - i > 0; i++) {
      moves.push({ x: hor[numX], y: (this.y - i) as Vertical });
      if (ChessPiece.findPiece(hor[numX], (this.y - i) as Vertical)) break;
    }
    for (let i = 1; this.y + i < 9; i++) {
      moves.push({ x: hor[numX], y: (this.y + i) as Vertical });
      if (ChessPiece.findPiece(hor[numX], (this.y + i) as Vertical)) break;
    }
    for (let i = 1; numX - i > -1; i++) {
      moves.push({ x: hor[numX - i], y: this.y });
      if (ChessPiece.findPiece(hor[numX - i], this.y)) break;
    }
    for (let i = 1; numX + i < 8; i++) {
      moves.push({ x: hor[numX + i], y: this.y });
      if (ChessPiece.findPiece(hor[numX + i], this.y)) break;
    }

    return moves.filter(
      (pos) => ChessPiece.findPiece(pos.x, pos.y)?.color !== this.color
    );
  }
}
