import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import {
  checkMatch,
  drawCards,
  gameActions,
  selectData,
  shuffleCards,
  preloadImages,
} from '@/entities/game';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { useGetImagesQuery } from '@/shared/api/pixabayApi';
import cls from './GameCanvas.module.scss';

export const GameCanvas = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardSize = 100;
  const gap = 1;

  const { numCards } = useAppSelector(selectData);

  const [time, setTime] = useState(0);
  const [cards, setCards] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [preloadedImages, setPreloadedImages] = useState<{
    [url: string]: HTMLImageElement;
  }>({});

  const cols = useMemo(() => Math.ceil(Math.sqrt(numCards)), [numCards]);

  const { data: imagesForGame } = useGetImagesQuery(numCards);

  useEffect(() => {
    if (imagesForGame) {
      const shuffledImages = shuffleCards(
        imagesForGame.hits.map((img) => img.previewURL),
      );
      setCards(shuffledImages);

      preloadImages(shuffledImages).then(setPreloadedImages);
    }
  }, [imagesForGame, numCards]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawCards(
          ctx,
          cards,
          openCards,
          matchedCards,
          cols,
          cardSize,
          gap,
          preloadedImages,
        );
      }
    }
  }, [cards, openCards, matchedCards, cols, preloadedImages]);

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
            () => {
              dispatch(gameActions.saveGameTime(time));
              navigate(routePaths[RouteNames.END_GAME]);
            },
          );
        }, 1000);
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={cls.canvas}
      width={cols * (cardSize + gap)}
      height={Math.ceil(numCards / cols) * (cardSize + gap)}
      onClick={handleClick}
    />
  );
};
