import { showNotification } from '@mantine/notifications';

export const notifyError = (message: string) => {
  showNotification({
    title: 'Ошибка',
    message,
    color: 'red',
  });
};
