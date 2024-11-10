import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  GAP,
} from '@/entities/game/model/constants/game';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { handleEndGame } from '@/entities/game/handlers/gameEndHandler';
import {
  selectData,
  drawCards,
  shuffleCards,
  animateCard,
  checkMatch,
  gameActions,
  clickCard,
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

  const { openCards, matchedCards, cardAnimations } = useAppSelector(
    (state) => state.game,
  );

  const cols = useMemo(() => Math.ceil(Math.sqrt(numCards)), [numCards]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setCards(shuffleCards([...initialCards]));
    dispatch(gameActions.resetGame());
    setTime(0);
  }, [initialCards, dispatch]);

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
    dispatch(
      gameActions.updateCardAnimation({
        key: cardIndex,
        progress: 0,
        isOpening,
      }),
    );
  };

  useEffect(() => {
    const unsubscribe = animateCard(
      dispatch,
      // @ts-ignore @ts-expect-error  скорей всего нужно поправить GameState
      () => ({ game: { cardAnimations, openCards } }),
      (firstCardIndex: number, secondCardIndex: number) => {
        checkMatch({
          firstCardIndex,
          secondCardIndex,
          cards,
          numCards,
          matchedCards,
          time,
          dispatch,
          navigate,
          onEndGame: () => handleEndGame(time, dispatch, navigate),
        });
      },
    );

    return () => {
      unsubscribe();
    };
  }, [
    dispatch,
    cardAnimations,
    openCards,
    cards,
    matchedCards,
    navigate,
    numCards,
    time,
  ]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const cardIndex = clickCard(event, canvasRef, cols);
    if (cardIndex !== null) {
      if (
        !openCards.includes(cardIndex) &&
        !matchedCards.includes(cardIndex) &&
        !cardAnimations[cardIndex]
      ) {
        startCardAnimation(cardIndex, true);
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={cls.canvas}
      width={cols * (CARD_WIDTH + GAP) + GAP * 2.5}
      height={Math.ceil(numCards / cols) * (CARD_HEIGHT + GAP) + GAP * 2.5}
      onClick={handleClick}
      data-testid="game-canvas"
    />
  );
};
