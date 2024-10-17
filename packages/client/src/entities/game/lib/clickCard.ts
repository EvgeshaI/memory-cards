import {
  CARD_WIDTH,
  CARD_HEIGHT,
  GAP,
} from '@/entities/game/model/constants/game';

export const clickCard = (
  event: React.MouseEvent<HTMLCanvasElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  cols: number,
): number | null => {
  if (!canvasRef.current) {
    return null;
  }

  const rect = canvasRef.current.getBoundingClientRect();
  const scaleX = canvasRef.current.width / rect.width;
  const scaleY = canvasRef.current.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;

  const row = Math.floor(y / (CARD_HEIGHT + GAP));
  const col = Math.floor(x / (CARD_WIDTH + GAP));
  const cardIndex = row * cols + col;

  const cardX = col * (CARD_WIDTH + GAP);
  const cardY = row * (CARD_HEIGHT + GAP);

  if (
    x >= cardX &&
    x <= cardX + CARD_WIDTH &&
    y >= cardY &&
    y <= cardY + CARD_HEIGHT
  ) {
    return cardIndex;
  }

  return null;
};
