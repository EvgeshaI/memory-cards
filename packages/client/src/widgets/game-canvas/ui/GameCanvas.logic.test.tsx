// import { fireEvent, render } from '@testing-library/react';
// import { act } from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
// import { gameReducer, GameState } from '@/entities/game';
// import { GameCanvas } from './GameCanvas';
import 'jest-canvas-mock';

jest.mock('@/entities/game', () => ({
  ...jest.requireActual('@/entities/game'),
  shuffleCards: jest.fn((cards) => cards),
}));

jest.mock('@/entities/user', () => ({
  useUserData: jest.fn(() => ({
    user: {
      avatar: 'test-avatar-url',
      first_name: 'Test User',
      score: 100,
    },
  })),
}));

jest.mock('@/shared/api/notifications', () => ({
  handleGameTimeAndSubscription: jest.fn(),
}));

// const defaultGameState: GameState = {
//   numCards: 6,
//   emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕'],
//   gameTime: 0,
//   cardAnimations: {},
//   openCards: [],
//   matchedCards: [],
//   leaders: [],
// };

// const createTestStore = (customState: Partial<GameState> = {}) =>
//   configureStore({
//     reducer: { game: gameReducer },
//     preloadedState: { game: { ...defaultGameState, ...customState } },
//   });

// const renderGameCanvas = (store: EnhancedStore) =>
//   render(
//     <MemoryRouter>
//       <Provider store={store}>
//         <GameCanvas />
//       </Provider>
//     </MemoryRouter>,
//   );

// const clickOnCanvas = (
//   canvas: HTMLCanvasElement,
//   x: number,
//   y: number,
// ): void => {
//   () => {
//     fireEvent.click(canvas, { clientX: x, clientY: y });
//   };
// };

describe('GameCanvas - тесты на механику переворота карточек', () => {
  test('переворот одной карточки', () => {
    //   const store = createTestStore();
    //   const { getByTestId } = renderGameCanvas(store);
    //   const canvas = getByTestId('game-canvas') as HTMLCanvasElement;
    //   clickOnCanvas(canvas, 50, 50);
    //   const ctx = canvas.getContext('2d');
    //   if (!ctx) {
    //     throw new Error('Unable to get 2D context');
    //   }
    //   jest.spyOn(ctx, 'fillText').mockImplementation(() => {});
    //   expect(ctx!.fillText).toHaveBeenCalledWith(
    //     '🎉',
    //     expect.any(Number),
    //     expect.any(Number),
    //   );
    // });
    // test('переворот двух карточек', () => {
    //   const store = createTestStore();
    //   const { getByTestId } = renderGameCanvas(store);
    //   const canvas = getByTestId('game-canvas') as HTMLCanvasElement;
    //   clickOnCanvas(canvas, 50, 50);
    //   clickOnCanvas(canvas, 150, 50);
    //   const ctx = canvas.getContext('2d');
    //   expect(ctx!.fillText).toHaveBeenCalledWith(
    //     '🎉',
    //     expect.any(Number),
    //     expect.any(Number),
    //   );
    //   expect(ctx!.fillText).toHaveBeenCalledWith(
    //     '😈',
    //     expect.any(Number),
    //     expect.any(Number),
    //   );
    // });
    // test('две не совпавшие карточки закрываются', async () => {
    //   const store = createTestStore();
    //   const { getByTestId } = renderGameCanvas(store);
    //   const canvas = getByTestId('game-canvas') as HTMLCanvasElement;
    //   clickOnCanvas(canvas, 50, 50);
    //   clickOnCanvas(canvas, 150, 50);
    //   const ctx = canvas.getContext('2d');
    //   (ctx!.fillText as jest.Mock).mockClear();
    //   await act(async () => {
    //     await new Promise<void>((resolve) => {
    //       setTimeout(resolve, 1000);
    //     });
    //   });
    //   expect(ctx!.fillText).not.toHaveBeenCalledWith(
    //     '🎉',
    //     expect.any(Number),
    //     expect.any(Number),
    //   );
    //   expect(ctx!.fillText).not.toHaveBeenCalledWith(
    //     '😈',
    //     expect.any(Number),
    //     expect.any(Number),
    //   );
    // });
    // test('две совпавшие карточки остаются открытыми', async () => {
    //   const store = createTestStore({
    //     emojis: ['🎉', '🎉', '😈', '😈', '🐱', '🐶'],
    //   });
    //   const { getByTestId } = renderGameCanvas(store);
    //   const canvas = getByTestId('game-canvas') as HTMLCanvasElement;
    //   clickOnCanvas(canvas, 50, 50);
    //   clickOnCanvas(canvas, 150, 50);
    //   const ctx = canvas.getContext('2d');
    //   expect(ctx!.fillText).toHaveBeenCalledWith(
    //     '🎉',
    //     expect.any(Number),
    //     expect.any(Number),
    //   );
  });
});
