import {
  configureStore,
  combineReducers,
  Reducer,
  UnknownAction,
} from '@reduxjs/toolkit';
import { rtkApi } from '@/shared/api/rtkApi';
import { userReducer } from '@/entities/user';
import { StateSchema } from './types';

export const createReduxStore = (initialState?: Partial<StateSchema>) => {
  const rootReducers: Reducer<
    StateSchema,
    UnknownAction,
    Partial<StateSchema>
  > = combineReducers({
    user: userReducer,
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
