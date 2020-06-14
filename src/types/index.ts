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

export type Position = {
  x: Horizontal;
  y: Vertical;
};

export type Vertical = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Horizontal = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

export type ChessColumn = {
  [key in Vertical]: ChessCode | 0;
};

export type ChessBoard = {
  [key in Horizontal]: ChessColumn;
};
