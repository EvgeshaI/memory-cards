import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSchema } from '@/entities/game/model/types';

const initialState: GameSchema = {
  numCards: 6,
  emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕', '🚀', '🌟', '🧁', '🍔'],
  gameTime: 0,
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
  },
});

export const { reducer: gameReducer, actions: gameActions } = gameSlice;
