import { CARD_WIDTH, CARD_HEIGHT, GAP } from '../model/constants/game';
import { loadImage } from './loadImage';

let gradientImage: HTMLImageElement | null = null;

loadImage(CARD_WIDTH, CARD_HEIGHT, (img) => {
  gradientImage = img;
});

const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

export const drawCards = (
  ctx: CanvasRenderingContext2D,
  cards: string[],
  openCards: number[],
  matchedCards: number[],
  cardAnimations: { [key: number]: { progress: number; isOpening: boolean } },
  cols: number,
) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < cards.length; i += 1) {
    const x = (i % cols) * (CARD_WIDTH + GAP) + GAP;
    const y = Math.floor(i / cols) * (CARD_HEIGHT + GAP) + GAP;

    ctx.save();

    ctx.translate(x + CARD_WIDTH / 2, y + CARD_HEIGHT / 2);

    let progress = 0;
    let isAnimating = false;
    let isOpening = false;
    let angle = 0;

    if (cardAnimations[i]) {
      isAnimating = true;
      progress = cardAnimations[i].progress;
      isOpening = cardAnimations[i].isOpening;

      if (isOpening) {
        angle = progress * Math.PI;
      } else {
        angle = (1 - progress) * Math.PI;
      }

      const scaleX = Math.cos(angle);
      ctx.scale(scaleX, 1);
    }

    const isOpen = openCards.includes(i);
    const isMatched = matchedCards.includes(i);
    const showFront =
      (isAnimating && angle > Math.PI / 2) || (!isAnimating && isOpen);

    if (isAnimating) {
      const scaleX = Math.cos(angle);
      if (scaleX < 0) {
        ctx.scale(-1, 1);
      }
    }

    let fillColor = 'purple';
    let textColor = 'white';

    if (isMatched) {
      fillColor = 'gray';
    } else if (showFront) {
      fillColor = 'white';
      textColor = 'black';
    } else if (isOpen && !isMatched) {
      fillColor = 'red';
    }

    roundRect(
      ctx,
      -CARD_WIDTH / 2,
      -CARD_HEIGHT / 2,
      CARD_WIDTH,
      CARD_HEIGHT,
      10,
    );

    if (!showFront && !isMatched && !(isOpen && !isMatched)) {
      if (gradientImage) {
        ctx.clip();
        ctx.drawImage(
          gradientImage,
          -CARD_WIDTH / 2,
          -CARD_HEIGHT / 2,
          CARD_WIDTH,
          CARD_HEIGHT,
        );
      } else {
        ctx.fillStyle = fillColor;
        ctx.fill();
      }
    } else {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }

    if (showFront || isMatched || (isOpen && !isMatched)) {
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = textColor;
      ctx.fillText(cards[i], 0, 0);
    }

    ctx.restore();
  }
};
