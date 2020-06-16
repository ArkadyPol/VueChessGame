import ChessPiece from "./chess-piece";
import WhitePawn from "./chess-piece/WhitePawn";
import { ChessCode, Horizontal } from "@/types";
import BlackPawn from "./chess-piece/BlackPawn";
import Knight from "./chess-piece/Knight";
import Bishop from "./chess-piece/Bishop";
import Rook from "./chess-piece/Rook";
export const hor = ["a", "b", "c", "d", "e", "f", "g", "h"] as Horizontal[];

const arrangeChessPieces = () => {
  new Rook({ x: "a", y: 8 }, "black");
  new Knight({ x: "b", y: 8 }, "black");
  new Bishop({ x: "c", y: 8 }, "black");
  new ChessPiece({ x: "d", y: 8 }, ChessCode.BlackQueen);
  new ChessPiece({ x: "e", y: 8 }, ChessCode.BlackKing);
  new Bishop({ x: "f", y: 8 }, "black");
  new Knight({ x: "g", y: 8 }, "black");
  new Rook({ x: "h", y: 8 }, "black");
  new Rook({ x: "a", y: 1 }, "white");
  new Knight({ x: "b", y: 1 }, "white");
  new Bishop({ x: "c", y: 1 }, "white");
  new ChessPiece({ x: "d", y: 1 }, ChessCode.WhiteQueen);
  new ChessPiece({ x: "e", y: 1 }, ChessCode.WhiteKing);
  new Bishop({ x: "f", y: 1 }, "white");
  new Knight({ x: "g", y: 1 }, "white");
  new Rook({ x: "h", y: 1 }, "white");
  for (let i = 0; i < 8; i++) {
    new BlackPawn({ x: hor[i], y: 7 });
    new WhitePawn({ x: hor[i], y: 2 });
  }
};

arrangeChessPieces();
