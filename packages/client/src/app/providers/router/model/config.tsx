import { createBrowserRouter } from 'react-router-dom'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { MainLayout } from '@/app/layouts/main/MainLayout'
import { MainPage } from '@/pages/main'
import { ProfilePage } from '@/pages/profile'
import { ForbiddenPage } from '@/pages/forbidden'
import { NotFoundPage } from '@/pages/not-found'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: routePaths[RouteNames.MAIN],
        element: <MainPage />,
      },
      {
        path: routePaths[RouteNames.PROFILE](':id'),
        element: <ProfilePage />,
      },
      {
        path: routePaths[RouteNames.FORBIDDEN],
        element: <ForbiddenPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
