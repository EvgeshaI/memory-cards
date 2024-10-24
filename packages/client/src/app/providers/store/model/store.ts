import {
  combineReducers,
  configureStore,
  Reducer,
  UnknownAction,
} from '@reduxjs/toolkit';
import { rtkApi } from '@/shared/api/rtkApi';
import { userReducer } from '@/entities/user';
import { gameReducer } from '@/entities/game';
import { themeReducer } from '@/features/theming/model/themeSlice';
import { StateSchema } from './types';

export const createReduxStore = (initialState?: Partial<StateSchema>) => {
  const rootReducers: Reducer<
    StateSchema,
    UnknownAction,
    Partial<StateSchema>
  > = combineReducers({
    user: userReducer,
    game: gameReducer,
    theme: themeReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  });

  return configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
