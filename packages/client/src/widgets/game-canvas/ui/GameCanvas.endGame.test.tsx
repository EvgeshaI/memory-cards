import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from '@/entities/game'
import { GameCanvas } from './GameCanvas'
import '@testing-library/jest-dom'

jest.mock('@/shared/api/notifications', () => ({
  handleGameTimeAndSubscription: jest.fn(),
}));

const initialState = {
  game: {
    numCards: 6,
    emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕'],
    gameTime: 0,
    leaders: []
  },
};
jest.mock('@/entities/user', () => ({
  useUserData: jest.fn(() => ({
    user: {
      avatar: 'test-avatar-url',
      first_name: 'Test User',
      score: 100,
    },
  })),
}));

const createMockStore = (state = initialState) =>
  configureStore({
    reducer: { game: gameReducer },
    preloadedState: state,
  });

describe('GameCanvas - тесты на механику переворота карточек', () => {
  test('игра завершается при совпадении всех карточек', () => {
    const state = {
      ...initialState,
      game: {
        ...initialState.game,
        numCards: 2,
        emojis: ['🎉', '🎉'],
      },
    };

    const store = createMockStore(state);

    const { getByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <GameCanvas />
        </Provider>
      </MemoryRouter>,
    );

    const canvas = getByTestId('game-canvas') as HTMLCanvasElement;

    fireEvent.click(canvas, { clientX: 50, clientY: 50 });
    fireEvent.click(canvas, { clientX: 150, clientY: 50 });

    setTimeout(() => {
      const endGameInfo = getByTestId('end-game-info');
      expect(endGameInfo).toBeInTheDocument();
    }, 1000);
  });
});
