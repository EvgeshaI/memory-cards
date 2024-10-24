import { ReactNode } from 'react';
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from 'react-router-dom';
import { getRoutes } from '../model';

interface RouterProviderProps {
  authInitializer: ReactNode;
  errorElement: ReactNode;
}

export const RouterProvider = ({
  errorElement,
  authInitializer,
}: RouterProviderProps) => {
  const routes = getRoutes({
    authInitializer,
    errorElement,
  });
  const router = createBrowserRouter(routes);

  return <Provider router={router} />;
};
