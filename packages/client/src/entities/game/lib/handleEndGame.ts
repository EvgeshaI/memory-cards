import { fetchNewLeader, gameActions, NotificationProps } from '@/entities/game'
import { useAppDispatch } from '@/shared/lib/store'
import { useNavigate } from 'react-router-dom'
import { RouteNames, routePaths } from '@/shared/constants/router'

const dispatch = useAppDispatch();
const navigate = useNavigate();

export const handleEndGame = async (
  time: number,
  setNotification: (notification: NotificationProps | null) => void,
) => {
  try {
    await dispatch(fetchNewLeader(time));
    dispatch(gameActions.saveGameTime(time));
    navigate(routePaths[RouteNames.END_GAME]);
  } catch (error) {
    setNotification({
      type: 'error',
      message: 'Ошибка при отправке лидера на сервер',
    });
  }
};
