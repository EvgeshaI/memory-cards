import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../model/store';

export const StoreProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};
