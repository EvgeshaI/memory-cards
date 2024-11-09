import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../model/store';

interface StoreProviderProps {
  children: ReactNode;
  store: ReturnType<typeof createReduxStore>;
}

export const StoreProvider = ({ children, store }: StoreProviderProps) => (
  <Provider store={store}>{children}</Provider>
);
