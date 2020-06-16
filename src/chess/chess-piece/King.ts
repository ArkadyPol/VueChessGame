import ChessPiece from ".";
import { Position, ChessCode, Horizontal, Vertical } from "@/types";
import { hor } from "..";

export default class King extends ChessPiece {
  constructor(position: Position, color: "white" | "black") {
    super(
      position,
      color === "white" ? ChessCode.WhiteKing : ChessCode.BlackKing
    );
  }
  
  get allowedMoves() {
    let moves = [] as Position[];
    let numX = hor.indexOf(this.x);
    if (this.y - 1 > 0) {
      if (numX - 1 > -1)
        moves.push({ x: hor[numX - 1], y: (this.y - 1) as Vertical });
      if (numX + 1 < 8)
        moves.push({ x: hor[numX + 1], y: (this.y - 1) as Vertical });
      moves.push({ x: hor[numX], y: (this.y - 1) as Vertical });
    }
    if (this.y + 1 < 9) {
      if (numX - 1 > -1)
        moves.push({ x: hor[numX - 1], y: (this.y + 1) as Vertical });
      if (numX + 1 < 8)
        moves.push({ x: hor[numX + 1], y: (this.y + 1) as Vertical });
      moves.push({ x: hor[numX], y: (this.y + 1) as Vertical });
    }
    if (numX - 1 > -1) moves.push({ x: hor[numX - 1], y: this.y });
    if (numX + 1 < 8) moves.push({ x: hor[numX + 1], y: this.y });

    return moves.filter(
      (pos) => ChessPiece.findPiece(pos.x, pos.y)?.color !== this.color
    );
  }
}
