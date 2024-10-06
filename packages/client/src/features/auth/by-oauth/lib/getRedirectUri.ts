import { RouteNames, routePaths } from '@/shared/constants/router';

export const getRedirectUri = () =>
  `${window.location.origin}${routePaths[RouteNames.OAUTH]}`;
