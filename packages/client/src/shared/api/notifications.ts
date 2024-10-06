import { PUSH_SUBSCRIPTION_KEY } from '@/shared/constants/storageKeys';

interface PushSubscription {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function sendGameTimeToServer(
  subscription: PushSubscription,
  time: string,
) {
  try {
    const response = await fetch(
      `${apiBaseUrl}/notifications/save-last-game-time`,
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
