import { RouteNames, routePaths } from '@/shared/constants/router';
import { SERVER_HOST } from '@/shared/config/env';

export const getRedirectUri = () =>
  `${SERVER_HOST}${routePaths[RouteNames.OAUTH]}`;
