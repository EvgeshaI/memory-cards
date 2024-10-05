import { useState, useEffect } from 'react';
import { NOTIFICATIONS_ENABLED_KEY } from '@/shared/constants/storageKeys';

export const useNotificationState = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      const notificationEnabled =
        localStorage.getItem(NOTIFICATIONS_ENABLED_KEY) === 'true';
      setIsEnabled(notificationEnabled);
    }
  }, []);

  const enableNotifications = () => {
    setIsEnabled(true);
    localStorage.setItem(NOTIFICATIONS_ENABLED_KEY, 'true');
  };

  return { isEnabled, enableNotifications };
};
