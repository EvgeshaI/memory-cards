import { useAppSelector } from '@/shared/lib/store';
import { selectData, selectIsLoading } from '../selectors';

export const useUserData = () => {
  const user = useAppSelector(selectData);
  const isLoading = useAppSelector(selectIsLoading);

  return {
    user,
    isLoading,
  };
};
