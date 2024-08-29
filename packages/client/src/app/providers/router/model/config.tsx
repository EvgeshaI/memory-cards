import { createBrowserRouter } from 'react-router-dom'
import { RouteNames, routePaths } from '@/shared/constants/router'
import { MainLayout } from '@/shared/ui'
import { Sidebar } from '@/widgets'
import {
  MainPage,
  ProfilePage,
  ForbiddenPage,
  NotFoundPage,
  StartGamePage,
  EndGamePage,
  Authorization,
  Registration,
} from '@/pages'

export const router = createBrowserRouter([
  {
    element: <MainLayout sidebarSlot={<Sidebar />} />,
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
        path: routePaths[RouteNames.START_GAME],
        element: <StartGamePage />,
      },
      {
        path: routePaths[RouteNames.END_GAME],
        element: <EndGamePage />,
      },
      {
        path: routePaths[RouteNames.AUTHORIZATION],
        element: <Authorization />,
      },
      {
        path: routePaths[RouteNames.REGISTRATION],
        element: <Registration />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
