import cron from 'node-cron';
import { sendDailyNotification } from '../notifications/notificationController';

export function setupCronJobs() {
  cron.schedule('*/1 * * * *', () => {
    console.log('Отправляем тестовое уведомления поиграть');
    sendDailyNotification();
  });

  cron.schedule('0 9 * * *', () => {
    console.log('Отправляем уведомления утром');
    sendDailyNotification();
  });

  cron.schedule('0 18 * * *', () => {
    console.log('Отправляем уведомления вечером');
    sendDailyNotification();
  });
}
