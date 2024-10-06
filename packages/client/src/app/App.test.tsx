import { render } from '@testing-library/react';
import { App } from './App';

jest.mock('@/shared/api/notifications', () => ({
  handleGameTimeAndSubscription: jest.fn(),
}));

jest.mock('@/shared/api/subscribeToPush', () => ({
  subscribeToPush: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') }),
);

global.window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

test('Example test', async () => {
  const { container } = render(<App />);
  const app = container.querySelector('.app');

  expect(app).toBeDefined();
});
