import { FC, ReactNode } from 'react';
import { RouterProvider as Provider } from 'react-router-dom';
import { createRouter } from '../model/config';

interface Props {
  authInitializer: ReactNode;
  errorElement: ReactNode;
}

export const RouterProvider: FC<Props> = (props) => {
  const { errorElement, authInitializer } = props;

  const router = createRouter({
    authInitializer,
    errorElement,
  });

  return <Provider router={router} />;
};
