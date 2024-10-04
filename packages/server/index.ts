import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import webPush from 'web-push';
import { notificationRoutes } from './features/notifications/routes';
import { subscriptionRoutes } from './features/subscriptions/routes';
import { setupCronJobs } from './features/cron/cronJobs';
import { createClientAndConnect } from './db';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = Number(process.env.SERVER_PORT) || 3001;

const vapidKeys = {
  publicKey:
    'BLJjCoT17qM-rhpiCG-bg6RTCjoSlN5OzoDOK66b9BWJaTYt8_10EKj5C5pIwfvP3JIUI6Fn94Gc1vYdk3-8Wis',
  privateKey: 'ZnLUli0XRm3Z0P2Mf1sF1s6KXPmEIL0GatiZjVKP_cY',
};

webPush.setVapidDetails(
  'mailto:u.agarova@yandex.ru',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

createClientAndConnect();

app.use('/notifications', notificationRoutes);
app.use('/subscriptions', subscriptionRoutes);

setupCronJobs();

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)');
});

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
