import { sendGameTimeToServer } from '@/shared/api/notifications';

export async function handleGameTimeAndSubscription() {
  const now = new Date().toISOString();
  const storedSubscription = localStorage.getItem('pushSubscription');

  if (storedSubscription) {
    const subscription = JSON.parse(storedSubscription);
    await sendGameTimeToServer(subscription, now);
  }
}
