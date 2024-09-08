import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../../../../entities/user/model/slice/userSlice';

const rootReducers = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
