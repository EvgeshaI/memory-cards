import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadUserData } from '../services';
import { UserSchema } from '../types';

const initialState: UserSchema = {
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserSchema['data']>) => {
      state.data = payload;
    },
    clearUser: (state) => {
      state.data = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadUserData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(loadUserData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
