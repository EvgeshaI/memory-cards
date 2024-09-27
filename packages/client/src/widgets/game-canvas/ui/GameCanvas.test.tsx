import { fireEvent, render } from '@testing-library/react'
import { act } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'
import { gameReducer } from '@/entities/game'
import { GameCanvas } from './GameCanvas'

interface GameState {
  numCards: number;
  emojis: string[];
  gameTime: number;
  leaders: []
}

const initialState: GameState = {
  numCards: 6,
  emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕', '🚀', '🌟', '🧁', '🍔'],
  gameTime: 0,
  leaders: []
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

const createMockStore = (numCards: number) =>
  configureStore({
    reducer: { game: gameReducer },
    preloadedState: {
      game: {
        ...initialState,
        numCards,
      },
    },
  });

const renderWithStore = (store: ReturnType<typeof createMockStore>) =>
  render(
    <MemoryRouter>
      <Provider store={store}>
        <GameCanvas />
      </Provider>
    </MemoryRouter>,
  );

describe('GameCanvas - тесты со снимками', () => {
  test('рендер с 6 карточками', () => {
    const store = createMockStore(6);
    const { asFragment } = renderWithStore(store);

    expect(asFragment()).toMatchSnapshot();
  });

  test('рендер с 12 карточками', () => {
    const store = createMockStore(12);
    const { asFragment } = renderWithStore(store);

    expect(asFragment()).toMatchSnapshot();
  });

  test('рендер с 20 карточками', () => {
    const store = createMockStore(20);
    const { asFragment } = renderWithStore(store);

    expect(asFragment()).toMatchSnapshot();
  });

  test('состояние игрового поля после переворота карточки', () => {
    const store = createMockStore(6);
    const { asFragment, getByTestId } = renderWithStore(store);

    const canvas = getByTestId('game-canvas');
    act(() => {
      fireEvent.click(canvas, { clientX: 50, clientY: 50 });
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
