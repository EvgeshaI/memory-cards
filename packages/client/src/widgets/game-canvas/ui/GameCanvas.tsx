import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePaths, RouteNames } from '@/shared/constants/router';
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  GAP,
} from '@/entities/game/model/constants/game';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import {
  selectData,
  drawCards,
  shuffleCards,
  animateCard,
  checkMatch,
  gameActions,
} from '@/entities/game';
import cls from './GameCanvas.module.scss';

export const GameCanvas = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { emojis: gameCards, numCards } = useAppSelector(selectData);

  const initialCards = useMemo(() => {
    const selectedEmojis = gameCards.slice(0, numCards / 2);
    return [...selectedEmojis, ...selectedEmojis];
  }, [gameCards, numCards]);

  const [time, setTime] = useState(0);
  const [cards, setCards] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const [cardAnimations, setCardAnimations] = useState<{
    [key: number]: { progress: number; isOpening: boolean };
  }>({});

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
        drawCards(ctx, cards, openCards, matchedCards, cardAnimations, cols);
      }
    }
  }, [cards, openCards, matchedCards, cardAnimations, cols]);

  const startCardAnimation = (cardIndex: number, isOpening: boolean) => {
    setCardAnimations((prev) => ({
      ...prev,
      [cardIndex]: { progress: 0, isOpening },
    }));
  };

  useEffect(() => {
    if (Object.keys(cardAnimations).length > 0) {
      return animateCard(
        cardAnimations,
        setCardAnimations,
        openCards,
        setOpenCards,
        (firstCardIndex, secondCardIndex) => {
          checkMatch(
            firstCardIndex,
            secondCardIndex,
            cards,
            matchedCards,
            setMatchedCards,
            setOpenCards,
            startCardAnimation,
            () => {
              dispatch(gameActions.saveGameTime(time));
              navigate(routePaths[RouteNames.END_GAME]);
            },
          );
        },
      );
    }
    return undefined;
  }, [
    cardAnimations,
    cards,
    dispatch,
    matchedCards,
    navigate,
    openCards,
    time,
  ]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const cardIndex =
      Math.floor(y / (CARD_HEIGHT + GAP)) * cols +
      Math.floor(x / (CARD_WIDTH + GAP));

    if (!openCards.includes(cardIndex) && !matchedCards.includes(cardIndex)) {
      if (Object.keys(cardAnimations).length > 0) {
        return;
      }
      startCardAnimation(cardIndex, true);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={cls.canvas}
      width={cols * (CARD_WIDTH + GAP) + GAP * 2.5}
      height={Math.ceil(numCards / cols) * (CARD_HEIGHT + GAP) + GAP * 2.5}
      onClick={handleClick}
    />
  );
};
