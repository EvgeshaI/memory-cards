import { useCallback, useEffect, useRef, useState } from 'react';
import cls from './GameCanvas.module.scss';

export const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardSize = 100;
  const gap = 1;
  const initialCards: string[] = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
  ];
  const shuffleCards = (array: string[]) =>
    array.sort(() => Math.random() - 0.5);
  const [cards, setCards] = useState<string[]>(shuffleCards(initialCards));
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const drawCards = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (let i = 0; i < cards.length; i += 1) {
        const x = (i % 5) * (cardSize + gap) + gap;
        const y = Math.floor(i / 5) * (cardSize + gap) + gap;

        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, cardSize + 2 * gap, cardSize + 2 * gap);

        ctx.fillStyle = matchedCards.includes(i) ? 'gray' : 'blue';
        ctx.fillRect(x + gap, y + gap, cardSize, cardSize);

        ctx.fillStyle = 'white';
        if (openCards.includes(i) || matchedCards.includes(i)) {
          ctx.fillText(cards[i], x + gap + 40, y + gap + 60);
        }
      }
    },
    [cards, openCards, matchedCards],
  );

  const restartGame = () => {
    setCards(shuffleCards(initialCards));
    setMatchedCards([]);
    setOpenCards([]);
  };

  const checkMatch = (currentCardIndex: number) => {
    const [firstCardIndex] = openCards;

    if (cards[firstCardIndex] === cards[currentCardIndex]) {
      setMatchedCards((prev) => [...prev, firstCardIndex, currentCardIndex]);
    }

    setOpenCards([]);

    // добавить вывод результата после окончания игры
    if (matchedCards.length + 2 === cards.length) {
      setTimeout(() => restartGame(), 1000);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawCards(ctx);
      }
    }
  }, [cards, openCards, matchedCards, drawCards]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cardIndex =
      Math.floor(y / (cardSize + gap)) * 5 + Math.floor(x / (cardSize + gap));

    if (!openCards.includes(cardIndex) && !matchedCards.includes(cardIndex)) {
      setOpenCards((prev) => [...prev, cardIndex]);
      if (openCards.length === 1) {
        setTimeout(() => checkMatch(cardIndex), 1000);
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={cls.canvas}
      width={510}
      height={200}
      onClick={handleClick}
    />
  );
};
