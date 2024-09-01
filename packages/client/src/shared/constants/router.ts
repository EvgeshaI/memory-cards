export enum RouteNames {
  MAIN = 'main',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
  FORUM = 'forum',
  FORUM_TOPIC = 'forumTopic',
  LEADERBOARD = 'leaderboard',
  START_GAME = 'startGame',
  END_GAME = 'endGame',
  AUTHORIZATION = 'authorization',
  REGISTRATION = 'registration',
}

interface RoutePaths {
  [RouteNames.MAIN]: string
  [RouteNames.PROFILE]: (id: string) => string
  [RouteNames.FORBIDDEN]: string
  [RouteNames.FORUM]: string
  [RouteNames.FORUM_TOPIC]: (id: string) => string
  [RouteNames.LEADERBOARD]: string
  [RouteNames.START_GAME]: string
  [RouteNames.END_GAME]: string
  [RouteNames.AUTHORIZATION]: string
  [RouteNames.REGISTRATION]: string
}

export const routePaths: RoutePaths = {
  [RouteNames.AUTHORIZATION]: '/',
  [RouteNames.REGISTRATION]: '/registration',
  [RouteNames.MAIN]: '/main',
  [RouteNames.PROFILE]: (id: string) => `/profile/${id}`,
  [RouteNames.FORBIDDEN]: '/forbidden',
  [RouteNames.FORUM]: '/forum',
  [RouteNames.FORUM_TOPIC]: (id: string) => `/forum/${id}`,
  [RouteNames.LEADERBOARD]: '/leaderboard',
  [RouteNames.START_GAME]: '/startGame',
  [RouteNames.END_GAME]: '/endGame',
}
