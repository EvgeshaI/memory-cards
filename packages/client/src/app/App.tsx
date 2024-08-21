import { useEffect } from 'react'
import { RouterProvider } from './providers/router'
import { MantineProvider } from './providers/mantine'

export const App = () => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return (
    <MantineProvider>
      <div className="app">
        <RouterProvider />
      </div>
    </MantineProvider>
  )
}
