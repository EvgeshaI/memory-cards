export enum RouteNames {
  MAIN = 'main',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
  AUTHORIZATION = 'authorization',
  REGISTRATION = 'registration',
}

interface RoutePaths {
  [RouteNames.MAIN]: string
  [RouteNames.PROFILE]: (id: string) => string
  [RouteNames.FORBIDDEN]: string
  [RouteNames.AUTHORIZATION]: string
  [RouteNames.REGISTRATION]: string
}

export const routePaths: RoutePaths = {
  [RouteNames.MAIN]: '/',
  [RouteNames.PROFILE]: (id: string) => `/profile/${id}`,
  [RouteNames.FORBIDDEN]: '/forbidden',
  [RouteNames.AUTHORIZATION]: '/authorization',
  [RouteNames.REGISTRATION]: '/registration',
}
