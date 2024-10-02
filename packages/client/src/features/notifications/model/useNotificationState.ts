import { useState, useEffect } from 'react';

export const useNotificationState = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      const notificationEnabled =
        localStorage.getItem('notificationsEnabled') === 'true';
      setIsEnabled(notificationEnabled);
    }
  }, []);

  const enableNotifications = () => {
    setIsEnabled(true);
    localStorage.setItem('notificationsEnabled', 'true');
  };

  return { isEnabled, enableNotifications };
};
