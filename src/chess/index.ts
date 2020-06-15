import ChessPiece from "./chess-piece";
import Pawn from "./chess-piece/Pawn";
import { ChessCode, Horizontal } from "@/types";
export const hor = ["a", "b", "c", "d", "e", "f", "g", "h"] as Horizontal[];

const arrangeChessPieces = () => {
  new ChessPiece({ x: "a", y: 8 }, ChessCode.BlackRook);
  new ChessPiece({ x: "b", y: 8 }, ChessCode.BlackKnight);
  new ChessPiece({ x: "c", y: 8 }, ChessCode.BlackBishop);
  new ChessPiece({ x: "d", y: 8 }, ChessCode.BlackQueen);
  new ChessPiece({ x: "e", y: 8 }, ChessCode.BlackKing);
  new ChessPiece({ x: "f", y: 8 }, ChessCode.BlackBishop);
  new ChessPiece({ x: "g", y: 8 }, ChessCode.BlackKnight);
  new ChessPiece({ x: "h", y: 8 }, ChessCode.BlackRook);
  new ChessPiece({ x: "a", y: 1 }, ChessCode.WhiteRook);
  new ChessPiece({ x: "b", y: 1 }, ChessCode.WhiteKnight);
  new ChessPiece({ x: "c", y: 1 }, ChessCode.WhiteBishop);
  new ChessPiece({ x: "d", y: 1 }, ChessCode.WhiteQueen);
  new ChessPiece({ x: "e", y: 1 }, ChessCode.WhiteKing);
  new ChessPiece({ x: "f", y: 1 }, ChessCode.WhiteBishop);
  new ChessPiece({ x: "g", y: 1 }, ChessCode.WhiteKnight);
  new ChessPiece({ x: "h", y: 1 }, ChessCode.WhiteRook);
  for (let i = 0; i < 8; i++) {
    new Pawn({ x: hor[i], y: 7 }, "black");
    new Pawn({ x: hor[i], y: 2 }, "white");
  }
};

arrangeChessPieces();
