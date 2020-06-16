import ChessPiece from ".";
import { Position, ChessCode, Horizontal, Vertical } from "@/types";
import { hor } from "..";

export default class Knight extends ChessPiece {
  constructor(position: Position, color: "white" | "black") {
    super(
      position,
      color === "white" ? ChessCode.WhiteKnight : ChessCode.BlackKnight
    );
  }
  
  get allowedMoves() {
    let moves = [] as Position[];
    let numX = hor.indexOf(this.x);
    if (this.y - 2 > 0) {
      if (numX - 1 > -1)
        moves.push({ x: hor[numX - 1], y: (this.y - 2) as Vertical });
      if (numX + 1 < 8)
        moves.push({ x: hor[numX + 1], y: (this.y - 2) as Vertical });
    }
    if (this.y - 1 > 0) {
      if (numX - 2 > -1)
        moves.push({ x: hor[numX - 2], y: (this.y - 1) as Vertical });
      if (numX + 2 < 8)
        moves.push({ x: hor[numX + 2], y: (this.y - 1) as Vertical });
    }
    if (this.y + 1 < 9) {
      if (numX - 2 > -1)
        moves.push({ x: hor[numX - 2], y: (this.y + 1) as Vertical });
      if (numX + 2 < 8)
        moves.push({ x: hor[numX + 2], y: (this.y + 1) as Vertical });
    }
    if (this.y + 2 < 9) {
      if (numX - 1 > -1)
        moves.push({ x: hor[numX - 1], y: (this.y + 2) as Vertical });
      if (numX + 1 < 8)
        moves.push({ x: hor[numX + 1], y: (this.y + 2) as Vertical });
    }
    return moves.filter(
      (pos) => ChessPiece.findPiece(pos.x, pos.y)?.color !== this.color
    );
  }
}
