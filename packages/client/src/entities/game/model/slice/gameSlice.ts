import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSchema, Leader } from '@/entities/game/model/types';

const initialState: GameSchema = {
  numCards: 6,
  emojis: ['🎉', '😈', '🧠', '🐱', '🐶', '🍕', '🚀', '🌟', '🧁', '🍔'],
  gameTime: 0,
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
  },
});

export const { reducer: gameReducer, actions: gameActions } = gameSlice;
