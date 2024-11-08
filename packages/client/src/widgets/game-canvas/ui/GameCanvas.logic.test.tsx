import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { GameCanvas } from './GameCanvas';
import 'jest-canvas-mock';

const defaultGameState = {
  numCards: 6,
  emojis: ['🎉', '🎉', '😈', '😈', '🐱', '🐶'],
  gameTime: 0,
  cardAnimations: {},
  openCards: [],
  matchedCards: [],
  leaders: [],
};

const mockStore = configureMockStore();

const renderGameCanvas = (store: any) =>
  render(
    <MemoryRouter>
      <Provider store={store}>
        <GameCanvas />
      </Provider>
    </MemoryRouter>,
  );

describe('GameCanvas - простые тесты на механику переворота карточек', () => {
  test('переворот одной карточки', () => {
    const store = mockStore({ game: defaultGameState });
    const { getByTestId } = renderGameCanvas(store);
    const canvas = getByTestId('game-canvas') as HTMLCanvasElement;
    fireEvent.click(canvas, { clientX: 50, clientY: 50 });

    expect(store.getActions()).toContainEqual(
      expect.objectContaining({
        type: 'game/updateCardAnimation',
      }),
    );
  });

  test('переворот двух карточек', () => {
    const store = mockStore({ game: defaultGameState });
    const { getByTestId } = renderGameCanvas(store);
    const canvas = getByTestId('game-canvas') as HTMLCanvasElement;
    fireEvent.click(canvas, { clientX: 50, clientY: 50 });
    fireEvent.click(canvas, { clientX: 150, clientY: 50 });

    expect(store.getActions()).toContainEqual(
      expect.objectContaining({
        type: 'game/updateCardAnimation',
      }),
    );
  });

  test('проверка на начальное действие resetGame', () => {
    const store = mockStore({ game: defaultGameState });
    renderGameCanvas(store);

    expect(store.getActions()).toContainEqual(
      expect.objectContaining({
        type: 'game/resetGame',
      }),
    );
  });
});
