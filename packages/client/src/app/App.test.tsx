import { render } from '@testing-library/react';
import { App } from './App';

jest.mock('../shared/constants/config.ts', () => ({
  API_KEY_PIXABAY: 'mocked_api_key',
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
