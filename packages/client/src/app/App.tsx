import { RouterProvider } from './providers/router';
import { MantineProvider } from './providers/mantine';
import './styles/index.scss';

export const App = () => (
  <MantineProvider>
    <div className="app">
      <RouterProvider />
    </div>
  </MantineProvider>
);
