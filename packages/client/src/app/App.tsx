import { RouterProvider } from './providers/router';
import { MantineProvider } from './providers/mantine';
import './styles/index.scss';
import ErrorBoundary from './providers/error-boundary';

export const App = () => (
  <MantineProvider>
    <ErrorBoundary>
      <div className="app">
        <RouterProvider />
      </div>
    </ErrorBoundary>
  </MantineProvider>
);
