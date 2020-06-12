export const drawBoard = (ctx: CanvasRenderingContext2D) => {
  let isWhite = true;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (!isWhite) {
        ctx.fillStyle = "brown";
        ctx.fillRect(j * 60, i * 60, 60, 60);
      }
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
};
