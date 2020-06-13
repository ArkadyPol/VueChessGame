export type Vertical = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Horizontal = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

export const hor = ["a", "b", "c", "d", "e", "f", "g", "h"] as Horizontal[];

export enum ChessPiece {
  WhiteKing = 9812,
  WhiteQueen,
  WhiteRook,
  WhiteBishop,
  WhiteKnight,
  WhitePawn,
  BlackKing,
  BlackQueen,
  BlackRook,
  BlackBishop,
  BlackKnight,
  BlackPawn,
}

export type ChessColumn = {
  [key in Vertical]: ChessPiece | 0;
};

export type ChessBoard = {
  [key in Horizontal]: ChessColumn;
};

const arrangeChessPieces = (): ChessBoard => {
  let chessBoard = {} as ChessBoard;
  for (let i of hor) {
    chessBoard[i] = {} as ChessColumn;
    for (let j = 3; j < 7; j++) {
      chessBoard[i][j as Vertical] = 0;
    }
  }
  chessBoard["a"][8] = ChessPiece.BlackRook;
  chessBoard["b"][8] = ChessPiece.BlackKnight;
  chessBoard["c"][8] = ChessPiece.BlackBishop;
  chessBoard["d"][8] = ChessPiece.BlackQueen;
  chessBoard["e"][8] = ChessPiece.BlackKing;
  chessBoard["f"][8] = ChessPiece.BlackBishop;
  chessBoard["g"][8] = ChessPiece.BlackKnight;
  chessBoard["h"][8] = ChessPiece.BlackRook;
  for (let i = 0; i < 8; i++) {
    chessBoard[hor[i]][7] = ChessPiece.BlackPawn;
  }
  for (let i = 0; i < 8; i++) {
    chessBoard[hor[i]][2] = ChessPiece.WhitePawn;
  }
  chessBoard["a"][1] = ChessPiece.WhiteRook;
  chessBoard["b"][1] = ChessPiece.WhiteKnight;
  chessBoard["c"][1] = ChessPiece.WhiteBishop;
  chessBoard["d"][1] = ChessPiece.WhiteQueen;
  chessBoard["e"][1] = ChessPiece.WhiteKing;
  chessBoard["f"][1] = ChessPiece.WhiteBishop;
  chessBoard["g"][1] = ChessPiece.WhiteKnight;
  chessBoard["h"][1] = ChessPiece.WhiteRook;
  return chessBoard;
};

export default arrangeChessPieces;
