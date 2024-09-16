export const drawCards = (
  ctx: CanvasRenderingContext2D,
  cards: string[],
  openCards: number[],
  matchedCards: number[],
  cols: number,
  cardSize: number,
  gap: number,
  preloadedImages: { [url: string]: HTMLImageElement },
) => {
  cards.forEach((card, index) => {
    const x = (index % cols) * (cardSize + gap);
    const y = Math.floor(index / cols) * (cardSize + gap);

    ctx.fillStyle = '#cccccc';
    ctx.fillRect(x, y, cardSize, cardSize);

    if (openCards.includes(index) || matchedCards.includes(index)) {
      const img = preloadedImages[card];

      if (img) {
        ctx.clearRect(x, y, cardSize, cardSize);
        ctx.drawImage(img, x, y, cardSize, cardSize);
      } else {
        console.error(`Изображение для ${card} не найдено в кэше`);
      }
    }
  });
};
