import type { Request, Response } from 'express';

interface PushSubscription {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}

const subscriptions: Array<PushSubscription> = [];

export function subscribe(req: Request, res: Response) {
  const subscription = req.body;

  if (!subscriptions.find((sub) => sub.endpoint === subscription.endpoint)) {
    subscriptions.push(subscription);
    res.status(201).json({ message: 'Подписка успешно сохранена' });
  } else {
    res.status(200).json({ message: 'Подписка уже существует' });
  }
}

export function getSubscriptions() {
  return subscriptions;
}
