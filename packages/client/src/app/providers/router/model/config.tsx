import { createBrowserRouter } from 'react-router-dom'
import { RouteNames, routePaths } from '@/shared/constants/router'
import { MainLayout } from '@/app/layouts/main/MainLayout'
import { MainPage } from '@/pages/main'
import { ProfilePage } from '@/pages/profile'
import { ForbiddenPage } from '@/pages/forbidden'
import { NotFoundPage } from '@/pages/not-found'
import { StartGamePage } from '@/pages/start-game'
import { EndGamePage } from '@/pages/end-game'
import { Authorization, Registration } from '@/pages/auth'
import { ForumPage } from '@/pages/forum'
import { ForumTopicPage } from '@/pages/forum-topic'

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
  {
    path: routePaths[RouteNames.FORUM],
    element: <ForumPage />,
  },
  {
    path: routePaths[RouteNames.FORUM_TOPIC](':id'),
    element: <ForumTopicPage />,
  },
])
