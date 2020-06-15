import ChessPiece from ".";
import { Position, ChessCode, Horizontal, Vertical } from "@/types";
import { hor } from "..";

export default class WhitePawn extends ChessPiece {
  constructor(position: Position) {
    super(position, ChessCode.WhitePawn);
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
    if (!ChessPiece.findPiece(this.x, (this.y + 1) as Vertical)) {
      moves.push({ x: this.x, y: (this.y + 1) as Vertical });
      if (
        this.y === 2 &&
        !ChessPiece.findPiece(this.x, (this.y + 2) as Vertical)
      ) {
        moves.push({ x: this.x, y: (this.y + 2) as Vertical });
      }
    }
    if (
      ChessPiece.findPiece(hor[numX + 1], (this.y + 1) as Vertical)?.color ===
      "black"
    ) {
      moves.push({ x: hor[numX + 1], y: (this.y + 1) as Vertical });
    }
    if (
      ChessPiece.findPiece(hor[numX - 1], (this.y + 1) as Vertical)?.color !==
      "black"
    ) {
      moves.push({ x: hor[numX - 1], y: (this.y + 1) as Vertical });
    }
    return moves;
  }
}
