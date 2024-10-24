import '@/shared/config/yup';
import '@/shared/config/dayjs';
import ReactDOM from 'react-dom/server';
import { StrictMode } from 'react';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';
import { Notifications } from '@mantine/notifications';
import {
  AuthInitializeProvider,
  ErrorBoundary,
  MantineProvider,
  StoreProvider,
  ThemeProvider,
  createReduxStore,
  getRoutes,
} from './providers';
import './styles/index.scss';

export const render = async (req: Request) => {
  const routes = getRoutes({
    authInitializer: <AuthInitializeProvider />,
    errorElement: <ErrorBoundary hasError />,
  });
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(req);
  if (context instanceof Response) {
    throw new Error(`Response status: ${context.status}`);
  }

  const router = createStaticRouter(dataRoutes, context);

  const store = createReduxStore();

  return {
    html: ReactDOM.renderToString(
      <StrictMode>
        <ErrorBoundary>
          <StoreProvider store={store}>
            <MantineProvider>
              <Notifications position="top-right" zIndex={1000} />

              <ThemeProvider>
                <StaticRouterProvider router={router} context={context} />
              </ThemeProvider>
            </MantineProvider>
          </StoreProvider>
        </ErrorBoundary>
      </StrictMode>,
    ),
    initialState: store.getState(),
  };
};
