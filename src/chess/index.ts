export type Vertical = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Horizontal = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

export const hor = ["a", "b", "c", "d", "e", "f", "g", "h"] as Horizontal[];

export enum ChessCode {
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
  [key in Vertical]: ChessCode | 0;
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
  chessBoard["a"][8] = ChessCode.BlackRook;
  chessBoard["b"][8] = ChessCode.BlackKnight;
  chessBoard["c"][8] = ChessCode.BlackBishop;
  chessBoard["d"][8] = ChessCode.BlackQueen;
  chessBoard["e"][8] = ChessCode.BlackKing;
  chessBoard["f"][8] = ChessCode.BlackBishop;
  chessBoard["g"][8] = ChessCode.BlackKnight;
  chessBoard["h"][8] = ChessCode.BlackRook;
  for (let i = 0; i < 8; i++) {
    chessBoard[hor[i]][7] = ChessCode.BlackPawn;
  }
  for (let i = 0; i < 8; i++) {
    chessBoard[hor[i]][2] = ChessCode.WhitePawn;
  }
  chessBoard["a"][1] = ChessCode.WhiteRook;
  chessBoard["b"][1] = ChessCode.WhiteKnight;
  chessBoard["c"][1] = ChessCode.WhiteBishop;
  chessBoard["d"][1] = ChessCode.WhiteQueen;
  chessBoard["e"][1] = ChessCode.WhiteKing;
  chessBoard["f"][1] = ChessCode.WhiteBishop;
  chessBoard["g"][1] = ChessCode.WhiteKnight;
  chessBoard["h"][1] = ChessCode.WhiteRook;
  return chessBoard;
};

export default arrangeChessPieces;
