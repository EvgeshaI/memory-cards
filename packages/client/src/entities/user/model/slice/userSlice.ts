import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  login: string;
  password: string;
}

const initialState: User = { login: '', password: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => action.payload,
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
