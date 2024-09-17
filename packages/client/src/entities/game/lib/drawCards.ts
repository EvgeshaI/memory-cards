export const drawCards = (
  ctx: CanvasRenderingContext2D,
  cards: string[],
  openCards: number[],
  matchedCards: number[],
  cols: number,
  cardSize: number,
  gap: number,
) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < cards.length; i += 1) {
    const x = (i % cols) * (cardSize + gap) + gap;
    const y = Math.floor(i / cols) * (cardSize + gap) + gap;

    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, cardSize + 2 * gap, cardSize + 2 * gap);

    ctx.fillStyle = matchedCards.includes(i) ? 'gray' : 'blue';
    ctx.fillRect(x + gap, y + gap, cardSize, cardSize);

    ctx.fillStyle = 'white';
    if (openCards.includes(i) || matchedCards.includes(i)) {
      ctx.fillText(cards[i], x + gap + 40, y + gap + 60);
    }
  }
};
