import ChessPiece, { ChessCode, Horizontal, Vertical} from "./chess-piece";

export const hor = ["a", "b", "c", "d", "e", "f", "g", "h"] as Horizontal[];

export type ChessColumn = {
  [key in Vertical]: ChessCode | 0;
};

export type ChessBoard = {
  [key in Horizontal]: ChessColumn;
};

const chess = [] as ChessPiece[];

const arrangeChessPieces = () => {
  chess.push(new ChessPiece({ x: "a", y: 8 }, ChessCode.BlackRook));
  chess.push(new ChessPiece({ x: "b", y: 8 }, ChessCode.BlackKnight));
  chess.push(new ChessPiece({ x: "c", y: 8 }, ChessCode.BlackBishop));
  chess.push(new ChessPiece({ x: "d", y: 8 }, ChessCode.BlackQueen));
  chess.push(new ChessPiece({ x: "e", y: 8 }, ChessCode.BlackKing));
  chess.push(new ChessPiece({ x: "f", y: 8 }, ChessCode.BlackBishop));
  chess.push(new ChessPiece({ x: "g", y: 8 }, ChessCode.BlackKnight));
  chess.push(new ChessPiece({ x: "h", y: 8 }, ChessCode.BlackRook));
  chess.push(new ChessPiece({ x: "a", y: 1 }, ChessCode.WhiteRook));
  chess.push(new ChessPiece({ x: "b", y: 1 }, ChessCode.WhiteKnight));
  chess.push(new ChessPiece({ x: "c", y: 1 }, ChessCode.WhiteBishop));
  chess.push(new ChessPiece({ x: "d", y: 1 }, ChessCode.WhiteQueen));
  chess.push(new ChessPiece({ x: "e", y: 1 }, ChessCode.WhiteKing));
  chess.push(new ChessPiece({ x: "f", y: 1 }, ChessCode.WhiteBishop));
  chess.push(new ChessPiece({ x: "g", y: 1 }, ChessCode.WhiteKnight));
  chess.push(new ChessPiece({ x: "h", y: 1 }, ChessCode.WhiteRook));
  for (let i = 0; i < 8; i++) {
    chess.push(new ChessPiece({ x: hor[i], y: 7 }, ChessCode.BlackPawn));
    chess.push(new ChessPiece({ x: hor[i], y: 2 }, ChessCode.WhitePawn));
  }
};

arrangeChessPieces();

export default chess;
