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
      'http://localhost:3001/notifications/save-last-game-time',
      {
        method: 'POST',
        body: JSON.stringify({ subscription, lastGameTime: time }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 410) {
      localStorage.removeItem('pushSubscription');
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
