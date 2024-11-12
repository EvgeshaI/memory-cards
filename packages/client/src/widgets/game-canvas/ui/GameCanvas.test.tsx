import { fireEvent, render } from '@testing-library/react';
import { act } from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { GameCanvas } from './GameCanvas';

const initialState = {
  game: {
    numCards: 6,
    emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕', '🚀', '🌟', '🧁', '🍔'],
    gameTime: 0,
    cardAnimations: {},
    openCards: [],
    matchedCards: [],
    leaders: [],
  },
};

const mockStore = configureMockStore();

const renderWithStore = (store: any) =>
  render(
    <MemoryRouter>
      <Provider store={store}>
        <GameCanvas />
      </Provider>
    </MemoryRouter>,
  );

describe('GameCanvas - тесты со снимками', () => {
  test('рендер с 6 карточками', () => {
    const store = mockStore({
      game: {
        ...initialState.game,
        numCards: 6,
      },
    });
    const { asFragment } = renderWithStore(store);
    expect(asFragment()).toMatchSnapshot();
  });

  test('рендер с 12 карточками', () => {
    const store = mockStore({
      game: {
        ...initialState.game,
        numCards: 12,
      },
    });
    const { asFragment } = renderWithStore(store);
    expect(asFragment()).toMatchSnapshot();
  });

  test('рендер с 20 карточками', () => {
    const store = mockStore({
      game: {
        ...initialState.game,
        numCards: 20,
      },
    });
    const { asFragment } = renderWithStore(store);
    expect(asFragment()).toMatchSnapshot();
  });

  test('состояние игрового поля после переворота карточки', () => {
    const store = mockStore({
      game: initialState.game,
    });
    const { asFragment, getByTestId } = renderWithStore(store);

    const canvas = getByTestId('game-canvas');
    act(() => {
      fireEvent.click(canvas, { clientX: 50, clientY: 50 });
    });

    expect(asFragment()).toMatchSnapshot();
    const actions = store.getActions();
    expect(actions).toContainEqual(
      expect.objectContaining({
        type: 'game/updateCardAnimation',
      }),
    );
  });
});
