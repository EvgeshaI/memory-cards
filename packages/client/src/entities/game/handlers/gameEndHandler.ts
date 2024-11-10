import { NavigateFunction } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { routePaths, RouteNames } from '@/shared/constants/router';
import {
  gameActions,
  fetchNewLeader,
  fetchLeaders,
  handleGameTimeAndSubscription,
} from '@/entities/game';

export const handleEndGame = async (
  time: number,
  dispatch: AppDispatch,
  navigate: NavigateFunction,
) => {
  try {
    dispatch(gameActions.saveGameTime(time));
    await dispatch(fetchNewLeader(time)).unwrap();
    await dispatch(fetchLeaders());

    await handleGameTimeAndSubscription();

    navigate(routePaths[RouteNames.END_GAME]);
  } catch (error) {
    notifications.show({
      title: 'Error',
      message: 'Ошибка при отправке лидера на сервер',
    });
  }
};
