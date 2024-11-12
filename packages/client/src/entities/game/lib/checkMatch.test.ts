import { routePaths, RouteNames } from '@/shared/constants/router';
import { checkMatch } from './checkMatch';
import { gameActions } from '../model';

interface ICheckMatch {
  firstCardIndex: number;
  secondCardIndex: number;
  cards: string[];
  numCards: number;
  matchedCards: number[];
  time: number;
  dispatch: jest.Mock;
  navigate: jest.Mock;
}

describe('checkMatch функция', () => {
  let dispatch: jest.Mock;
  let navigate: jest.Mock;
  let checkMatchArgs: ICheckMatch;

  beforeEach(() => {
    dispatch = jest.fn();
    navigate = jest.fn();
    checkMatchArgs = {
      firstCardIndex: 0,
      secondCardIndex: 1,
      cards: ['🎉', '🎉', '🐱', '🐱'],
      numCards: 4,
      matchedCards: [],
      time: 100,
      dispatch,
      navigate,
    };
  });

  test('добавляются карточки в matchedCards и очищаются openCards, если они совпали', () => {
    checkMatch(checkMatchArgs);

    expect(dispatch).toHaveBeenCalledWith(gameActions.addMatchedCard(0));
    expect(dispatch).toHaveBeenCalledWith(gameActions.addMatchedCard(1));
    expect(dispatch).toHaveBeenCalledWith(gameActions.removeOpenCard(0));
    expect(dispatch).toHaveBeenCalledWith(gameActions.removeOpenCard(1));
    expect(navigate).not.toHaveBeenCalled();
  });

  test('переход к концу игры, если все карточки совпали', () => {
    checkMatchArgs.matchedCards = [0, 1];

    checkMatch(checkMatchArgs);

    expect(dispatch).toHaveBeenCalledWith(gameActions.addMatchedCard(0));
    expect(dispatch).toHaveBeenCalledWith(gameActions.addMatchedCard(1));
    expect(dispatch).toHaveBeenCalledWith(gameActions.saveGameTime(100));
    expect(navigate).toHaveBeenCalledWith(routePaths[RouteNames.END_GAME]);
  });

  test('очищаются openCards, если карточки не совпали', () => {
    checkMatchArgs.firstCardIndex = 0;
    checkMatchArgs.secondCardIndex = 2;

    checkMatch(checkMatchArgs);

    expect(dispatch).toHaveBeenCalledWith(
      gameActions.updateCardAnimation({
        key: 0,
        progress: 0,
        isOpening: false,
      }),
    );
    expect(dispatch).toHaveBeenCalledWith(
      gameActions.updateCardAnimation({
        key: 2,
        progress: 0,
        isOpening: false,
      }),
    );
    expect(navigate).not.toHaveBeenCalled();
  });
});
