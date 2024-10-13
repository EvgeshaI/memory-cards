import { showNotification } from '@mantine/notifications';
import { notificationIcon } from '@/shared/assets';
import { notifyError } from './notifyError';

type EnableNotifications = () => void;

const createNotification = () =>
  new Notification('Memory cards', {
    body: 'Уведомления включены',
    icon: notificationIcon,
  });

export const handleNotificationRequest = async (
  enableNotifications: EnableNotifications,
) => {
  if (!('Notification' in window)) {
    notifyError('Ваш браузер не поддерживает уведомления');
    return;
  }

  switch (Notification.permission) {
    case 'granted':
      showNotification({
        title: 'Уведомления уже включены',
        message: 'Вы уже дали разрешение на уведомления',
        color: 'blue',
      });
      return;
    case 'denied':
      notifyError('Измените настройки браузера для включения уведомлений');
      return;
    default:
      break;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      enableNotifications();
      createNotification();
      showNotification({
        title: 'Успех!',
        message: 'Уведомления включены.',
        color: 'green',
      });
    } else {
      showNotification({
        title: 'Не удалось включить уведомления',
        message: 'Вы не дали разрешение на отправку уведомлений.',
        color: 'yellow',
      });
    }
  } catch (error) {
    console.error('Ошибка при запросе разрешений на уведомления:', error);
    notifyError('Что-то пошло не так. Попробуйте снова.');
  }
};
