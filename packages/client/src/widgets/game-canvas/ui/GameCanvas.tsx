import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { gameActions, selectData } from '@/entities/game';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './GameCanvas.module.scss';

export const GameCanvas = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardSize = 100;
  const gap = 1;

  const { emojis: gameCards, numCards } = useAppSelector(selectData);

  const initialCards = useMemo(() => {
    const selectedEmojis = gameCards.slice(0, numCards / 2);
    return [...selectedEmojis, ...selectedEmojis];
  }, [gameCards, numCards]);

  const [time, setTime] = useState(0);
  const [cards, setCards] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const shuffleCards = (array: string[]) =>
    array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setCards(shuffleCards([...initialCards]));
  }, [numCards, gameCards, initialCards]);

  const drawCards = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (let i = 0; i < cards.length; i += 1) {
        const cols = Math.ceil(Math.sqrt(numCards));

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
    },
    [cards, openCards, matchedCards, numCards],
  );

  const checkMatch = (currentCardIndex: number) => {
    const [firstCardIndex] = openCards;

    if (cards[firstCardIndex] === cards[currentCardIndex]) {
      setMatchedCards((prev) => [...prev, firstCardIndex, currentCardIndex]);
    }

    setOpenCards([]);

    if (matchedCards.length + 2 === cards.length) {
      dispatch(gameActions.saveGameTime(time));
      navigate(routePaths[RouteNames.END_GAME]);
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
    const cols = Math.ceil(Math.sqrt(numCards));
    const cardIndex =
      Math.floor(y / (cardSize + gap)) * cols +
      Math.floor(x / (cardSize + gap));

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
      width={Math.ceil(Math.sqrt(numCards)) * (cardSize + gap)}
      height={
        Math.ceil(numCards / Math.ceil(Math.sqrt(numCards))) * (cardSize + gap)
      }
      onClick={handleClick}
    />
  );
};
