import React from 'react';

export const checkMatch = (
  firstCardIndex: number,
  currentCardIndex: number,
  cards: string[],
  matchedCards: number[],
  setMatchedCards: React.Dispatch<React.SetStateAction<number[]>>,
  setOpenCards: React.Dispatch<React.SetStateAction<number[]>>,
  onGameEnd: () => void,
) => {
  if (cards[firstCardIndex] === cards[currentCardIndex]) {
    setMatchedCards((prev) => [...prev, firstCardIndex, currentCardIndex]);
  }

  setOpenCards([]);

  if (matchedCards.length + 2 === cards.length) {
    onGameEnd();
  }
};
