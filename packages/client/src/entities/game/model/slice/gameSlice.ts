import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, Leader } from '@/entities/game/model/types';

const initialState: GameState = {
  numCards: 6,
  emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕', '🚀', '🌟', '🧁', '🍔'],
  gameTime: 0,
  cardAnimations: {},
  openCards: [],
  matchedCards: [],
  leaders: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setNumCards: (state, action: PayloadAction<number>) => {
      state.numCards = action.payload;
    },
    saveGameTime(state, action: PayloadAction<number>) {
      state.gameTime = action.payload;
    },
    setLeaders: (state, action: PayloadAction<Array<Leader>>) => {
      state.leaders = action.payload;
    },
    setOpenCards(state, action: PayloadAction<number[]>) {
      state.openCards = action.payload;
    },
    addOpenCard(state, action: PayloadAction<number>) {
      if (!state.openCards.includes(action.payload)) {
        state.openCards.push(action.payload);
      }
    },
    removeOpenCard(state, action: PayloadAction<number>) {
      state.openCards = state.openCards.filter(
        (index) => index !== action.payload,
      );
    },
    setMatchedCards(state, action: PayloadAction<number[]>) {
      state.matchedCards = action.payload;
    },
    addMatchedCard(state, action: PayloadAction<number>) {
      if (!state.matchedCards.includes(action.payload)) {
        state.matchedCards.push(action.payload);
      }
    },
    setCardAnimations(
      state,
      action: PayloadAction<{
        [key: number]: { progress: number; isOpening: boolean };
      }>,
    ) {
      state.cardAnimations = action.payload;
    },
    updateCardAnimation(
      state,
      action: PayloadAction<{
        key: number;
        progress: number;
        isOpening: boolean;
      }>,
    ) {
      const { key, progress, isOpening } = action.payload;
      state.cardAnimations[key] = { progress, isOpening };
    },
    removeCardAnimation(state, action: PayloadAction<number>) {
      delete state.cardAnimations[action.payload];
    },
    resetGame(state) {
      state.openCards = [];
      state.matchedCards = [];
      state.cardAnimations = {};
    },
  },
});

export const { reducer: gameReducer, actions: gameActions } = gameSlice;
