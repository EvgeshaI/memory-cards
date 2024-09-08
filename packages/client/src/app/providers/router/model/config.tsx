import { createBrowserRouter } from 'react-router-dom'
import { RouteNames, routePaths } from '@/shared/constants/router'
import { MainLayout } from '@/shared/ui'
import { Sidebar } from '@/widgets'
import {
  Authorization,
  EndGamePage,
  ErrorPage,
  Leaderboard,
  MainPage,
  ProfilePage,
  Registration,
  StartGamePage,
  Game,
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
        path: routePaths[RouteNames.LEADERBOARD],
        element: <Leaderboard />,
      },
      {
        path: routePaths[RouteNames.FORBIDDEN],
        element: <ErrorPage text={'500'} />,
      },
      {
        path: routePaths[RouteNames.START_GAME],
        element: <StartGamePage />,
      },
      {
        path: routePaths[RouteNames.GAME],
        element: <Game />,
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
        element: <ErrorPage text={'404'} />,
      },
    ],
  },
])
