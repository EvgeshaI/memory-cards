import { Navigate, Outlet } from 'react-router-dom';
import { useUserData } from '@/entities/user';
import { RouteNames, routePaths } from '@/shared/constants/router';

export const ProtectedRoute = () => {
  const { user } = useUserData();

  if (!user) {
    return <Navigate to={routePaths[RouteNames.AUTHORIZATION]} replace />;
  }

  return <Outlet />;
};
