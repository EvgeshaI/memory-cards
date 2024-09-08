export enum RouteNames {
  MAIN = 'main',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
  FORUM = 'forum',
  LEADERBOARD = 'leaderboard',
  START_GAME = 'startGame',
  GAME = 'game',
  END_GAME = 'endGame',
  AUTHORIZATION = 'authorization',
  REGISTRATION = 'registration',
}

interface RoutePaths {
  [RouteNames.MAIN]: string
  [RouteNames.PROFILE]: (id: string) => string
  [RouteNames.FORBIDDEN]: string
  [RouteNames.FORUM]: string
  [RouteNames.LEADERBOARD]: string
  [RouteNames.START_GAME]: string
  [RouteNames.GAME]: string
  [RouteNames.END_GAME]: string
  [RouteNames.AUTHORIZATION]: string
  [RouteNames.REGISTRATION]: string
}

export const routePaths: RoutePaths = {
  [RouteNames.MAIN]: '/',
  [RouteNames.PROFILE]: (id: string) => `/profile/${id}`,
  [RouteNames.FORBIDDEN]: '/forbidden',
  [RouteNames.FORUM]: '/forum',
  [RouteNames.LEADERBOARD]: '/leaderboard',
  [RouteNames.START_GAME]: '/startGame',
  [RouteNames.GAME]: '/game',
  [RouteNames.END_GAME]: '/endGame',
  [RouteNames.AUTHORIZATION]: '/authorization',
  [RouteNames.REGISTRATION]: '/registration',
}
