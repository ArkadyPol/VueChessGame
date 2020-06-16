import ChessPiece from ".";
import { Position, ChessCode, Horizontal, Vertical } from "@/types";
import { hor } from "..";

export default class BlackPawn extends ChessPiece {
  constructor(position: Position) {
    super(position, ChessCode.BlackPawn);
  }

  get allowedMoves() {
    let moves = [] as Position[];
    let numX = hor.indexOf(this.x);
    if (!ChessPiece.findPiece(this.x, (this.y - 1) as Vertical)) {
      moves.push({ x: this.x, y: (this.y - 1) as Vertical });
      if (
        this.y === 7 &&
        !ChessPiece.findPiece(this.x, (this.y - 2) as Vertical)
      ) {
        moves.push({ x: this.x, y: (this.y - 2) as Vertical });
      }
    }
    if (
      ChessPiece.findPiece(hor[numX + 1], (this.y - 1) as Vertical)?.color ===
      "white"
    ) {
      moves.push({ x: hor[numX + 1], y: (this.y - 1) as Vertical });
    }
    if (
      ChessPiece.findPiece(hor[numX - 1], (this.y - 1) as Vertical)?.color ===
      "white"
    ) {
      moves.push({ x: hor[numX - 1], y: (this.y - 1) as Vertical });
    }
    return moves;
  }
}
