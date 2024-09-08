import { fetchUserData } from '../../api/authApi';
import { User } from '../types';

interface LoadUserDataParams {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const loadUserData = async ({
  setUser,
  setError,
  setLoading,
}: LoadUserDataParams) => {
  try {
    const userData = await fetchUserData();
    setUser(userData);
  } catch (error) {
    setError('Ошибка при получении данных пользователя');
    console.error('Ошибка:', error);
  } finally {
    setLoading(false);
  }
};
