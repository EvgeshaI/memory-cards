import { Navigate, Outlet } from 'react-router-dom';
import { useUserData } from '@/entities/user';
import { RouteNames, routePaths } from '@/shared/constants/router';

export const RedirectIfAuthenticatedRoute = () => {
  const { user } = useUserData();

  if (user) {
    return <Navigate to={routePaths[RouteNames.START_GAME]} replace />;
  }

  return <Outlet />;
};
