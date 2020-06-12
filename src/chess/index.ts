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

export type Chess = {
  [key in Horizontal]: ChessColumn;
};

const arrangeChessPieces = (): Chess => {
  let chess = {} as Chess;
  for (let i of hor) {
    chess[i] = {} as ChessColumn;
    for (let j = 3; j < 7; j++) {
      chess[i][j as Vertical] = 0;
    }
  }
  chess["a"][8] = ChessPiece.BlackRook;
  chess["b"][8] = ChessPiece.BlackKnight;
  chess["c"][8] = ChessPiece.BlackBishop;
  chess["d"][8] = ChessPiece.BlackQueen;
  chess["e"][8] = ChessPiece.BlackKing;
  chess["f"][8] = ChessPiece.BlackBishop;
  chess["g"][8] = ChessPiece.BlackKnight;
  chess["h"][8] = ChessPiece.BlackRook;
  for (let i = 0; i < 8; i++) {
    chess[hor[i]][7] = ChessPiece.BlackPawn;
  }
  for (let i = 0; i < 8; i++) {
    chess[hor[i]][2] = ChessPiece.WhitePawn;
  }
  chess["a"][1] = ChessPiece.WhiteRook;
  chess["b"][1] = ChessPiece.WhiteKnight;
  chess["c"][1] = ChessPiece.WhiteBishop;
  chess["d"][1] = ChessPiece.WhiteQueen;
  chess["e"][1] = ChessPiece.WhiteKing;
  chess["f"][1] = ChessPiece.WhiteBishop;
  chess["g"][1] = ChessPiece.WhiteKnight;
  chess["h"][1] = ChessPiece.WhiteRook;
  return chess;
};

export default arrangeChessPieces;
