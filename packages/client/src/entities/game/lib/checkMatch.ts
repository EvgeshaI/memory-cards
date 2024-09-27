export const checkMatch = (
  firstCardIndex: number,
  secondCardIndex: number,
  cards: string[],
  matchedCards: number[],
  setMatchedCards: React.Dispatch<React.SetStateAction<number[]>>,
  setOpenCards: React.Dispatch<React.SetStateAction<number[]>>,
  startCardAnimation: (cardIndex: number, isOpening: boolean) => void,
  onGameEnd?: () => void,
) => {
  if (cards[firstCardIndex] === cards[secondCardIndex]) {
    setMatchedCards((prev) => [...prev, firstCardIndex, secondCardIndex]);
    setOpenCards([]);
  } else {
    startCardAnimation(firstCardIndex, false);
    startCardAnimation(secondCardIndex, false);
  }
  if (matchedCards.length + 2 === cards.length && onGameEnd) {
    onGameEnd();
  }
};
