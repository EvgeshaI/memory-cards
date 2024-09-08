import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducers = combineReducers({});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
