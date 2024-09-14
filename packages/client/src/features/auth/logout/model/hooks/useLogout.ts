import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userActions, logout } from '@/entities/user';
import { routePaths, RouteNames } from '@/shared/constants/router';
import { useAppDispatch } from '@/shared/lib/store';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      dispatch(userActions.clearUser());
      navigate(routePaths[RouteNames.AUTHORIZATION]);
    } catch (err) {
      setError('Ошибка при выходе');
      console.error('Ошибка разлогирования:', err);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogout, error, isLoading };
};
