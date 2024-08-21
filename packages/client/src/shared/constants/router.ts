export enum RouteNames {
  MAIN = 'main',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
}

interface RoutePaths {
  [RouteNames.MAIN]: string
  [RouteNames.PROFILE]: (id: string) => string
  [RouteNames.FORBIDDEN]: string
}

export const routePaths: RoutePaths = {
  [RouteNames.MAIN]: '/',
  [RouteNames.PROFILE]: (id: string) => `/profile/${id}`,
  [RouteNames.FORBIDDEN]: '/forbidden',
}
