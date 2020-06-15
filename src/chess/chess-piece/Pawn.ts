import ChessPiece from ".";
import { Position, ChessCode } from "@/types";

export default class Pawn extends ChessPiece {
  constructor(position: Position, color: "black" | "white") {
    super(
      position,
      color === "white" ? ChessCode.WhitePawn : ChessCode.BlackPawn
    );
  }
}
