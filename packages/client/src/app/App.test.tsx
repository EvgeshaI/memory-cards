import { App } from './App'
import { render } from '@testing-library/react'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

global.window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}))

test('Example test', async () => {
  const { container } = render(<App />)
  const app = container.querySelector('.app')

  expect(app).toBeDefined()
})
