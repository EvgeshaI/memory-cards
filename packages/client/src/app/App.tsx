import '@/shared/config/yup';
import '@/shared/config/dayjs';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from './providers/router';
import { MantineProvider } from './providers/mantine';
import './styles/index.scss';

export const App = () => (
  <MantineProvider>
    <Notifications position="top-right" zIndex={1000} />

    <div className="app">
      <RouterProvider />
    </div>
  </MantineProvider>
);
