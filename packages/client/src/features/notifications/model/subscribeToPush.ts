import { urlBase64ToUint8Array } from '@/shared/lib';

const vapidPublicKey = import.meta.env.VITE_PUBLIC_VAPID_KEY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function subscribeToPush(registration: ServiceWorkerRegistration) {
  if (!('PushManager' in window)) {
    console.warn('Push уведомления не поддерживаются в этом браузере.');
    return;
  }

  try {
    let subscription: PushSubscription | null = null;
    const storedSubscription = localStorage.getItem('pushSubscription');

    if (storedSubscription) {
      subscription = JSON.parse(storedSubscription);
    } else {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
      });

      localStorage.setItem('pushSubscription', JSON.stringify(subscription));
    }

    await fetch(`${apiBaseUrl}/subscriptions/subscribe`, {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Ошибка при подписке на push-уведомления:', error);
  }
}
