import '@/shared/config/yup';
import '@/shared/config/dayjs';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Notifications } from '@mantine/notifications';
import { subscribeToPush } from '@/shared/api/subscribeToPush';
import { startServiceWorker } from '@/shared/lib/serviceWorker';
import {
  AuthInitializeProvider,
  ErrorBoundary,
  MantineProvider,
  RouterProvider,
  StoreProvider,
  ThemeProvider,
  createReduxStore,
} from './providers';
import './styles/index.scss';

declare global {
  interface Window {
    APP_INITIAL_STATE: RootState;
  }
}

const container = document.getElementById('root') as HTMLElement;
const store = createReduxStore(
  typeof window === 'undefined' ? undefined : window.APP_INITIAL_STATE,
);

ReactDOM.hydrateRoot(
  container,
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider store={store}>
        <MantineProvider>
          <Notifications position="top-right" zIndex={1000} />

          <ThemeProvider>
            <RouterProvider
              authInitializer={<AuthInitializeProvider />}
              errorElement={<ErrorBoundary hasError />}
            />
          </ThemeProvider>
        </MantineProvider>
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>,
);

if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  startServiceWorker('/serviceWorker.js');

  navigator.serviceWorker.ready.then((registration) => {
    subscribeToPush(registration);
  });
}
