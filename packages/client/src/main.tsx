import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from './app/providers/mantine'
import { App } from './app/App'
import './app/styles/index.scss'

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

root.render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
)
