import { checkMatch } from './checkMatch';

describe('checkMatch функция', () => {
  let setMatchedCards: jest.Mock;
  let setOpenCards: jest.Mock;
  let onGameEnd: jest.Mock;
  let cards: string[];
  let matchedCards: number[];

  beforeEach(() => {
    setMatchedCards = jest.fn();
    setOpenCards = jest.fn();
    onGameEnd = jest.fn();
    cards = ['🎉', '🎉', '🐱', '🐱'];
    matchedCards = [];
  });

  test('добавляются карточки в matchedCards, если они совпали', () => {
    checkMatch(
      0,
      1,
      cards,
      matchedCards,
      setMatchedCards,
      setOpenCards,
      onGameEnd,
    );

    expect(setMatchedCards).toHaveBeenCalledWith(expect.any(Function));
    expect(setMatchedCards).toHaveBeenCalledTimes(1);

    setMatchedCards.mockImplementation((updateFn) => {
      const newMatchedCards = updateFn([]);
      expect(newMatchedCards).toEqual([0, 1]);
    });

    expect(setOpenCards).toHaveBeenCalledWith([]);
    expect(onGameEnd).not.toHaveBeenCalled();
  });

  test('очищается openCards, если карточки не совпали', () => {
    cards = ['🎉', '🐱', '🎉', '🐱'];

    checkMatch(
      0,
      1,
      cards,
      matchedCards,
      setMatchedCards,
      setOpenCards,
      onGameEnd,
    );

    expect(setMatchedCards).not.toHaveBeenCalled();
    expect(matchedCards).toEqual([]);
    expect(setOpenCards).toHaveBeenCalledWith([]);
    expect(onGameEnd).not.toHaveBeenCalled();
  });
});
