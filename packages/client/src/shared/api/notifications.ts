import { PUSH_SUBSCRIPTION_KEY } from '@/shared/constants/storageKeys';
import { SERVER_API_URL } from '@/shared/config/env';

interface PushSubscription {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}

export async function sendGameTimeToServer(
  subscription: PushSubscription,
  time: string,
) {
  try {
    const response = await fetch(
      `${SERVER_API_URL}/notifications/save-last-game-time`,
      {
        method: 'POST',
        body: JSON.stringify({ subscription, lastGameTime: time }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 410) {
      localStorage.removeItem(PUSH_SUBSCRIPTION_KEY);
      return;
    }

    if (!response.ok) {
      throw new Error(
        `Ошибка при отправке данных на сервер: ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error('Ошибка при отправке времени игры:', error);
  }
}
