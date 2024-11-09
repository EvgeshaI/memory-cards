import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '@/shared/constants/theme';

export interface ThemeSchema {
  theme: Theme;
}

const initialState: ThemeSchema = {
  theme: Theme.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
