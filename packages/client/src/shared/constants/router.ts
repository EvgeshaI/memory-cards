export enum RouteNames {
  MAIN = 'main',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
  FORUM = 'forum',
  LEADERBOARD = 'leaderboard',
  START_GAME = 'startGame'
}

interface RoutePaths {
  [RouteNames.MAIN]: string
  [RouteNames.PROFILE]: (id: string) => string
  [RouteNames.FORBIDDEN]: string
  [RouteNames.FORUM]: string
  [RouteNames.LEADERBOARD]: string
  [RouteNames.START_GAME]: string
}

export const routePaths: RoutePaths = {
  [RouteNames.MAIN]: '/',
  [RouteNames.PROFILE]: (id: string) => `/profile/${id}`,
  [RouteNames.FORBIDDEN]: '/forbidden',
  [RouteNames.FORUM]: '/forum',
  [RouteNames.LEADERBOARD]: '/leaderboard',
  [RouteNames.START_GAME]: '/startGame'
}
