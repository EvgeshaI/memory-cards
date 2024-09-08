import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api';
import { routePaths, RouteNames } from '@/shared/constants/router';

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
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
