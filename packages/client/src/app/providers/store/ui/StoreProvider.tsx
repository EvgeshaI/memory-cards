import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../model/store';
import { StateSchema } from '../model/types';

interface Props {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
}

export const StoreProvider = (props: Props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
