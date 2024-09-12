import { FC, ReactNode } from 'react';
import { RouterProvider as Provider } from 'react-router-dom';
import { createRouter } from '../model/config';

interface Props {
  errorElement: ReactNode;
}

export const RouterProvider: FC<Props> = (props) => {
  const { errorElement } = props;

  const router = createRouter({
    errorElement,
  });

  return <Provider router={router} />;
};
