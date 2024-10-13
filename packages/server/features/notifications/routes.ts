import { Router } from 'express';
import { saveLastGameTime } from './notificationController';
import { sendDailyNotification } from './notificationController';

export const notificationRoutes = Router();

notificationRoutes.post('/save-last-game-time', saveLastGameTime);
notificationRoutes.post('/send', sendDailyNotification);
