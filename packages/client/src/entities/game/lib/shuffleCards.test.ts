import { shuffleCards } from './shuffleCards';

describe('Тестирование shuffleCards', () => {
  let cards: string[];

  beforeEach(() => {
    cards = ['🎉', '😈', '🧠', '🐱', '🐶', '🍕'];
  });

  it('карты перемешиваются случайным образом', () => {
    jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.7);

    const shuffledCards = shuffleCards([...cards]);

    expect(shuffledCards).not.toEqual(cards);
    expect(shuffledCards).toEqual(expect.arrayContaining(cards));

    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('длина массива карт не изменяется', () => {
    const shuffledCards = shuffleCards([...cards]);

    expect(shuffledCards.length).toBe(cards.length);
  });
});
