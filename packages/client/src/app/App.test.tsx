import React from 'react';
// import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { App } from './App';

// jest.mock('@/shared/lib/startServiceWorker/startServiceWorker', () => ({
//   startServiceWorker: jest.fn(),
// }));

// jest.mock('@/shared/api/notifications', () => ({
//   handleGameTimeAndSubscription: jest.fn(),
// }));

// jest.mock('@/shared/api/subscribeToPush', () => ({
//   subscribeToPush: jest.fn(),
// }));

// jest.mock('@mantine/notifications', () => ({
//   Notifications: ({ children }: { children: React.ReactNode }) => (
//     <div>{children}</div>
//   ),
// }));

jest.mock('./providers', () => ({
  RouterProvider: ({
    authInitializer,
    errorElement,
  }: {
    authInitializer: React.ReactNode;
    errorElement: React.ReactNode;
  }) => (
    <div data-testid="router-provider">
      {authInitializer}
      {errorElement}
    </div>
  ),
  StoreProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="store-provider">{children}</div>
  ),
  MantineProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mantine-provider">{children}</div>
  ),
  AuthInitializeProvider: () => <div data-testid="auth-initialize-provider" />,
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('Рендеринг компонента App', async () => {
  // render(<App />);
  // const appContainer = await waitFor(() => document.querySelector('.app'));
  // expect(appContainer).toBeInTheDocument();
  // expect(screen.getByTestId('store-provider')).toBeInTheDocument();
  // expect(screen.getByTestId('mantine-provider')).toBeInTheDocument();
  // expect(screen.getByTestId('router-provider')).toBeInTheDocument();
  // expect(screen.getByTestId('auth-initialize-provider')).toBeInTheDocument();
});
