import { RouterProvider as Provider } from 'react-router-dom'
import { router } from '../model/config'

export const RouterProvider = () => {
  return <Provider router={router} />
}
