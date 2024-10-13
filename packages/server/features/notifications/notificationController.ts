import { getSubscriptions } from '../subscriptions/subscriptionController';
import webPush from 'web-push';
import type { Request, Response } from 'express';

interface PushSubscription {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}

const lastGameTimes: Array<{
  subscription: PushSubscription;
  lastGameTime: string;
}> = [];

const NOTIFICATION_INTERVAL_PROD = 24 * 60 * 60 * 1000;
const NOTIFICATION_INTERVAL_TEST = 1 * 60 * 1000;

const NOTIFICATION_INTERVAL =
  process.env.NODE_ENV === 'production'
    ? NOTIFICATION_INTERVAL_PROD
    : NOTIFICATION_INTERVAL_TEST;

export function saveLastGameTime(req: Request, res: Response) {
  const { subscription, lastGameTime } = req.body;

  const existingEntry = lastGameTimes.find(
    (entry) => entry.subscription.endpoint === subscription.endpoint,
  );
  if (existingEntry) {
    existingEntry.lastGameTime = lastGameTime;
  } else {
    lastGameTimes.push({ subscription, lastGameTime });
  }

  res.status(200).json({ message: 'Время последней игры успешно сохранено' });
}

export function sendDailyNotification() {
  const subscriptions = getSubscriptions();

  subscriptions.forEach((subscription) => {
    const userGameTime = lastGameTimes.find(
      (entry) => entry.subscription.endpoint === subscription.endpoint,
    );

    if (
      userGameTime &&
      isTimeToSendNotification(userGameTime.lastGameTime, NOTIFICATION_INTERVAL)
    ) {
      const notificationPayload = {
        title: 'Memory cards',
        body: 'Вы не играли сегодня. Пора вернуться и потренироваться!',
        icon: './notification-icon.png',
      };

      webPush
        .sendNotification(subscription, JSON.stringify(notificationPayload))
        .then(() =>
          console.log(
            'Уведомление отправлено пользователю:',
            subscription.endpoint,
          ),
        )
        .catch((err) => console.error('Ошибка при отправке уведомления:', err));
    }
  });
}

function isTimeToSendNotification(
  lastGameTime: string,
  timer: number,
): boolean {
  const now = new Date();
  const lastGameDate = new Date(lastGameTime);
  const timeDifference = now.getTime() - lastGameDate.getTime();
  return timeDifference > timer;
}
