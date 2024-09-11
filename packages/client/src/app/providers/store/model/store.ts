import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from '@/entities/user/model/slice/userSlice';

const rootReducers = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
