import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useAppSelector } from '@/shared/lib/store'
import { Notification } from '@mantine/core'
import { checkMatch, drawCards, handleEndGame, NotificationProps, selectData, shuffleCards } from '@/entities/game'
import cls from './GameCanvas.module.scss'

export const GameCanvas = () => {
  const [notification, setNotification] = useState<NotificationProps | null>(null);
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

  const cols = useMemo(() => Math.ceil(Math.sqrt(numCards)), [numCards]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setCards(shuffleCards([...initialCards]));
  }, [initialCards]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawCards(ctx, cards, openCards, matchedCards, cols, cardSize, gap);
      }
    }
  }, [cards, openCards, matchedCards, cols]);


  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const cardIndex =
      Math.floor(y / (cardSize + gap)) * cols +
      Math.floor(x / (cardSize + gap));

    if (!openCards.includes(cardIndex) && !matchedCards.includes(cardIndex)) {
      setOpenCards((prev) => [...prev, cardIndex]);
      if (openCards.length === 1) {
        setTimeout(() => {
          checkMatch(
            openCards[0],
            cardIndex,
            cards,
            matchedCards,
            setMatchedCards,
            setOpenCards,
            () => handleEndGame(time, setNotification),
          );
        }, 1000);
      }
    }
  };

  return (
    <div>
      {notification && (
        <Notification color={notification.type === 'success' ? 'green' : 'red'}>
          {notification.message}
        </Notification>
      )}
      <canvas
        ref={canvasRef}
        className={cls.canvas}
        width={cols * (cardSize + gap)}
        height={Math.ceil(numCards / cols) * (cardSize + gap)}
        onClick={handleClick}
        data-testid="game-canvas"
      />
    </div>
  );
};
