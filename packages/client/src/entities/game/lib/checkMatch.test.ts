import { NavigateFunction } from 'react-router-dom';
import { checkMatch } from './checkMatch';

interface ICheckMatch {
  firstCardIndex: number;
  secondCardIndex: number;
  cards: string[];
  numCards: number;
  matchedCards: number[];
  time: number;
  dispatch: AppDispatch;
  navigate: NavigateFunction;
}

describe('checkMatch функция', () => {
  let setMatchedCards: jest.Mock;
  // let setOpenCards: jest.Mock;
  // let onGameEnd: jest.Mock;
  let cards: string[];
  let matchedCards: number[];
  let numCards: number;
  const dispatch = jest.fn();
  const navigate = jest.fn();
  let checkMatchArgs: ICheckMatch;

  beforeEach(() => {
    setMatchedCards = jest.fn();
    // setOpenCards = jest.fn();
    // onGameEnd = jest.fn();
    cards = ['🎉', '🎉', '🐱', '🐱'];
    matchedCards = [];
    checkMatchArgs = {
      firstCardIndex: 0,
      secondCardIndex: 1,
      cards,
      numCards,
      matchedCards,
      time: 0,
      dispatch,
      navigate,
    };
  });

  test('добавляются карточки в matchedCards, если они совпали', () => {
    checkMatch(checkMatchArgs);

    setMatchedCards.mockImplementation((updateFn) => {
      const newMatchedCards = updateFn([]);
      expect(newMatchedCards).toEqual([0, 1]);
    });
    //  TODO - переписать тесты для setOpenCard и onGameEnd
    // expect(setOpenCards).toHaveBeenCalledWith([]);
    // expect(onGameEnd).not.toHaveBeenCalled();
  });

  test('очищается openCards, если карточки не совпали', () => {
    checkMatchArgs.firstCardIndex = 0;
    checkMatchArgs.secondCardIndex = 2;

    checkMatch(checkMatchArgs);

    expect(setMatchedCards).not.toHaveBeenCalled();
    expect(matchedCards).toEqual([]);
    // expect(setOpenCards).toHaveBeenCalledWith([]);
    // expect(onGameEnd).not.toHaveBeenCalled();
  });
});
