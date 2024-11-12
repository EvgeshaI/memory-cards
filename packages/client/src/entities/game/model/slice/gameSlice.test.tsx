import { gameReducer, gameActions } from '@/entities/game';
import { GameState } from '@/entities/game/model/types';

describe('gameReducer', () => {
  let initialState: GameState;

  beforeEach(() => {
    initialState = {
      numCards: 6,
      emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕', '🚀', '🌟', '🧁', '🍔'],
      gameTime: 0,
      cardAnimations: {},
      openCards: [],
      matchedCards: [],
      leaders: [],
    };
  });

  test('должен установить numCards', () => {
    const newState = gameReducer(initialState, gameActions.setNumCards(10));
    expect(newState.numCards).toBe(10);
  });

  test('должен сохранить gameTime', () => {
    const newState = gameReducer(initialState, gameActions.saveGameTime(120));
    expect(newState.gameTime).toBe(120);
  });

  test('должен установить leaders', () => {
    const leaders = [{ name: 'Player1', score: 100, count: 1 }];
    const newState = gameReducer(initialState, gameActions.setLeaders(leaders));
    expect(newState.leaders).toEqual(leaders);
  });

  test('должен установить openCards', () => {
    const openCards = [1, 2];
    const newState = gameReducer(
      initialState,
      gameActions.setOpenCards(openCards),
    );
    expect(newState.openCards).toEqual(openCards);
  });

  test('должен добавить openCard', () => {
    const newState = gameReducer(initialState, gameActions.addOpenCard(1));
    expect(newState.openCards).toContain(1);
  });

  test('должен удалить openCard', () => {
    initialState.openCards = [1, 2];
    const newState = gameReducer(initialState, gameActions.removeOpenCard(1));
    expect(newState.openCards).not.toContain(1);
  });

  test('должен установить matchedCards', () => {
    const matchedCards = [1, 2];
    const newState = gameReducer(
      initialState,
      gameActions.setMatchedCards(matchedCards),
    );
    expect(newState.matchedCards).toEqual(matchedCards);
  });

  test('должен добавить matchedCard', () => {
    const newState = gameReducer(initialState, gameActions.addMatchedCard(3));
    expect(newState.matchedCards).toContain(3);
  });

  test('должен установить cardAnimations', () => {
    const animations = { 1: { progress: 50, isOpening: true } };
    const newState = gameReducer(
      initialState,
      gameActions.setCardAnimations(animations),
    );
    expect(newState.cardAnimations).toEqual(animations);
  });

  test('должен обновить cardAnimation', () => {
    const animationUpdate = { key: 1, progress: 100, isOpening: false };
    const newState = gameReducer(
      initialState,
      gameActions.updateCardAnimation(animationUpdate),
    );
    expect(newState.cardAnimations[1]).toEqual({
      progress: 100,
      isOpening: false,
    });
  });

  test('должен удалить cardAnimation', () => {
    initialState.cardAnimations = { 1: { progress: 50, isOpening: true } };
    const newState = gameReducer(
      initialState,
      gameActions.removeCardAnimation(1),
    );
    expect(newState.cardAnimations[1]).toBeUndefined();
  });

  test('должен сбросить состояние игры', () => {
    initialState.openCards = [1];
    initialState.matchedCards = [2];
    initialState.cardAnimations = { 1: { progress: 50, isOpening: true } };
    const newState = gameReducer(initialState, gameActions.resetGame());
    expect(newState.openCards).toEqual([]);
    expect(newState.matchedCards).toEqual([]);
    expect(newState.cardAnimations).toEqual({});
  });
});
