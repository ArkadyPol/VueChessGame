import WhitePawn from "./chess-piece/WhitePawn";
import { Horizontal } from "@/types";
import BlackPawn from "./chess-piece/BlackPawn";
import Knight from "./chess-piece/Knight";
import Bishop from "./chess-piece/Bishop";
import Rook from "./chess-piece/Rook";
import Queen from "./chess-piece/Queen";
import King from "./chess-piece/King";
export const hor = ["a", "b", "c", "d", "e", "f", "g", "h"] as Horizontal[];

const arrangeValuablePieces = (y: 1 | 8, color: "white" | "black") => {
  new Rook({ x: "a", y }, color);
  new Knight({ x: "b", y }, color);
  new Bishop({ x: "c", y }, color);
  new Queen({ x: "d", y }, color);
  new King({ x: "e", y }, color);
  new Bishop({ x: "f", y }, color);
  new Knight({ x: "g", y }, color);
  new Rook({ x: "h", y }, color);
};

const arrangeChessPieces = () => {
  arrangeValuablePieces(8, "black");
  arrangeValuablePieces(1, "white");
  for (let i = 0; i < 8; i++) {
    new BlackPawn({ x: hor[i], y: 7 });
    new WhitePawn({ x: hor[i], y: 2 });
  }
};

arrangeChessPieces();
