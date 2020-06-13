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

export default class ChessPiece {
  position: Position;
  code: ChessCode;
  constructor(position: Position, code: ChessCode) {
    this.position = position;
    this.code = code;
  }
  get x() {
    return this.position.x;
  }
  get y() {
    return this.position.y;
  }
  get color() {
    return this.code <= 9817 ? "white" : "black";
  }
}
