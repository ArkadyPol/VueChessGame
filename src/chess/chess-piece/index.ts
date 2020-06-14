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
  static chess = [] as ChessPiece[];

  private position: Position;
  private _code: ChessCode;
  private isMoving = false;
  constructor(position: Position, code: ChessCode) {
    this.position = position;
    this._code = code;
    ChessPiece.chess.push(this);
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  get color() {
    return this._code <= 9817 ? "white" : "black";
  }

  get code() {
    if (!this.isMoving) return this._code;
    else return 0;
  }

  get codeInMove() {
    return this._code;
  }

  startMove() {
    this.isMoving = true;
  }

  endMove([chessX, chessY]: [Horizontal | undefined, Vertical | undefined]) {
    if (chessX && chessY) {
      let otherPiece = ChessPiece.chess.find(
        (piece) => piece.x === chessX && piece.y === chessY
      );
      if (this.color === otherPiece?.color) {
        return;
      } else if (otherPiece) {
        let id = ChessPiece.chess.findIndex(
          (piece) => piece.x === chessX && piece.y === chessY
        );
        ChessPiece.chess.splice(id, 1);
      }
      (this.position.x = chessX), (this.position.y = chessY);
    }
    this.isMoving = false;
  }
}
