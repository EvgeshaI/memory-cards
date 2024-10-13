import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { MainLayout } from '@/shared/ui';
import { Sidebar } from '@/widgets';
import {
  OAuthPage,
  Authorization,
  EndGamePage,
  ErrorPage,
  ForumPage,
  ForumTopicPage,
  Game,
  Leaderboard,
  MainPage,
  ProfilePage,
  Registration,
  StartGamePage,
} from '@/pages';
import { RedirectIfAuthenticatedRoute } from '../ui/RedirectIfAuthenticatedRoute';
import { ProtectedRoute } from '../ui/ProtectedRoute';

interface Payload {
  authInitializer: ReactNode;
  errorElement: ReactNode;
}

export const createRouter = (payload: Payload) => {
  const { errorElement, authInitializer } = payload;

  return createBrowserRouter([
    {
      errorElement,
      children: [
        {
          path: routePaths[RouteNames.OAUTH],
          element: <OAuthPage />,
        },
        {
          element: authInitializer,
          children: [
            {
              element: <RedirectIfAuthenticatedRoute />,
              children: [
                {
                  path: routePaths[RouteNames.AUTHORIZATION],
                  element: <Authorization />,
                },
                {
                  path: routePaths[RouteNames.REGISTRATION],
                  element: <Registration />,
                },
              ],
            },
            {
              element: <ProtectedRoute />,
              children: [
                {
                  element: <MainLayout sidebarSlot={<Sidebar />} />,
                  children: [
                    {
                      path: routePaths[RouteNames.PROFILE],
                      element: <ProfilePage />,
                    },
                    {
                      path: routePaths[RouteNames.LEADERBOARD],
                      element: <Leaderboard />,
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
                      path: routePaths[RouteNames.FORUM],
                      element: <ForumPage />,
                    },
                    {
                      path: routePaths[RouteNames.FORUM_TOPIC](':id'),
                      element: <ForumTopicPage />,
                    },
                  ],
                },
              ],
            },
            {
              path: routePaths[RouteNames.MAIN],
              element: <MainPage />,
            },
            {
              path: routePaths[RouteNames.FORBIDDEN],
              element: <ErrorPage text="500" />,
            },
            {
              path: '*',
              element: <ErrorPage text="404" />,
            },
          ],
        },
      ],
    },
  ]);
};
