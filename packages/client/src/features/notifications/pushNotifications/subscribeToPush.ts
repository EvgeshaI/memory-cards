import { urlBase64ToUint8Array } from './urlBase64ToUint8Array';

const vapidPublicKey =
  'BLJjCoT17qM-rhpiCG-bg6RTCjoSlN5OzoDOK66b9BWJaTYt8_10EKj5C5pIwfvP3JIUI6Fn94Gc1vYdk3-8Wis';

export async function subscribeToPush(registration: ServiceWorkerRegistration) {
  if ('PushManager' in window) {
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

      await fetch('http://localhost:3001/subscriptions/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Пользователь подписан на push-уведомления');
    } catch (error) {
      console.error('Ошибка при подписке на push-уведомления:', error);
    }
  } else {
    console.warn('Push уведомления не поддерживаются в этом браузере.');
  }
}
