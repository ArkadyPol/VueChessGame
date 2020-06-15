import { ChessCode, Horizontal, Vertical, Position } from "@/types";

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

  get allowedMoves() {
    let moves = [] as Position[];
    return moves;
  }

  startMove() {
    this.isMoving = true;
  }

  endMove([chessX, chessY]: [
    Horizontal | undefined,
    Vertical | undefined
  ]): boolean {
    this.isMoving = false;
    if (chessX && chessY) {
      let result = this.move(chessX, chessY);
      if (result === false) return false;
      (this.position.x = chessX), (this.position.y = chessY);
    }
    return true;
  }

  protected move(chessX: Horizontal, chessY: Vertical) {
    let otherPiece = ChessPiece.findPiece(chessX, chessY);
    if (otherPiece) {
      if (this.color === otherPiece.color) {
        return false;
      } else {
        ChessPiece.deletePiece(chessX, chessY);
      }
    }
  }

  static findPiece(
    chessX: Horizontal,
    chessY: Vertical
  ): ChessPiece | undefined {
    return this.chess.find((piece) => piece.x === chessX && piece.y === chessY);
  }

  static deletePiece(chessX: Horizontal, chessY: Vertical) {
    let id = this.chess.findIndex(
      (piece) => piece.x === chessX && piece.y === chessY
    );
    this.chess.splice(id, 1);
  }
}
