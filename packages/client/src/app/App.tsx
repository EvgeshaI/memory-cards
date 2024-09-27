import '@/shared/config/yup';
import '@/shared/config/dayjs';
import { Notifications } from '@mantine/notifications';
import { startServiceWorker } from '@/shared/lib/startServiceWorker/startServiceWorker';
import {
  RouterProvider,
  StoreProvider,
  MantineProvider,
  AuthInitializeProvider,
  ErrorBoundary,
} from './providers';
import './styles/index.scss';

startServiceWorker('/serviceWorker.js');

export const App = () => (
  <ErrorBoundary>
    <StoreProvider>
      <MantineProvider>
        <Notifications position="top-right" zIndex={1000} />

        <div className="app">
          <AuthInitializeProvider>
            <RouterProvider errorElement={<ErrorBoundary hasError />} />
          </AuthInitializeProvider>
        </div>
      </MantineProvider>
    </StoreProvider>
  </ErrorBoundary>
);
