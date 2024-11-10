import { NavigateFunction } from 'react-router-dom';
import { routePaths, RouteNames } from '@/shared/constants/router';
import { gameActions } from '../model';

interface ICheckMatch {
  firstCardIndex: number;
  secondCardIndex: number;
  cards: string[];
  numCards: number;
  matchedCards: number[];
  time: number;
  dispatch: AppDispatch;
  navigate: NavigateFunction;
  onEndGame?: () => Promise<void>;
}

export const checkMatch = async ({
  firstCardIndex,
  secondCardIndex,
  cards,
  numCards,
  matchedCards,
  time,
  dispatch,
  navigate,
  onEndGame,
}: ICheckMatch) => {
  if (cards[firstCardIndex] === cards[secondCardIndex]) {
    dispatch(gameActions.addMatchedCard(firstCardIndex));
    dispatch(gameActions.addMatchedCard(secondCardIndex));
    dispatch(gameActions.removeOpenCard(firstCardIndex));
    dispatch(gameActions.removeOpenCard(secondCardIndex));

    if (matchedCards.length + 2 === numCards) {
      dispatch(gameActions.saveGameTime(time));
      if (onEndGame) {
        await onEndGame();
      } else {
        navigate(routePaths[RouteNames.END_GAME]);
      }
    }
  } else {
    dispatch(
      gameActions.updateCardAnimation({
        key: firstCardIndex,
        progress: 0,
        isOpening: false,
      }),
    );
    dispatch(
      gameActions.updateCardAnimation({
        key: secondCardIndex,
        progress: 0,
        isOpening: false,
      }),
    );
  }
};
