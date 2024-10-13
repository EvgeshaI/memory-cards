import { Button, Tooltip } from '@mantine/core';
import { handleNotificationRequest } from '../model/handleNotificationRequest';
import { useNotificationState } from '../model/useNotificationState';

export const NotificationButton = () => {
  const { isEnabled, enableNotifications } = useNotificationState();

  const handleClick = () => {
    handleNotificationRequest(enableNotifications);
  };

  return (
    <Tooltip
      label="Отключить уведомления можно только в настройках браузера"
      disabled={!isEnabled}
      position="bottom"
      withArrow
    >
      <Button
        fullWidth
        radius="md"
        size="md"
        mt="20px"
        color="var(--accent-color)"
        onClick={handleClick}
        disabled={isEnabled}
      >
        {isEnabled ? 'Уведомления включены' : 'Включить уведомления'}
      </Button>
    </Tooltip>
  );
};
