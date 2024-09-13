import { useAppSelector } from '@/shared/lib/store';
import { selectData } from '../selectors';

export const useGameData = () => {
  const game = useAppSelector(selectData);
  return {
    game,
  };
};
