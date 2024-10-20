import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import webPush from 'web-push';
import { notificationRoutes } from './features/notifications/routes';
import { subscriptionRoutes } from './features/subscriptions/routes';
import { reactionsRouter } from './controllers/reactionsController';
import { forumRouter } from './controllers/forumController';
import { setupCronJobs } from './features/cron/cronJobs';
import { createClientAndConnect } from './db';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = Number(process.env.SERVER_PORT) || 3001;

const vapidCredentials = {
  publicKey: process.env.VITE_PUBLIC_VAPID_KEY || '',
  privateKey: process.env.PRIVATE_VAPID_KEY || '',
  contactEmail: process.env.VAPID_CONTACT_EMAIL,
};

webPush.setVapidDetails(
  `mailto:${vapidCredentials.contactEmail}`,
  vapidCredentials.publicKey,
  vapidCredentials.privateKey,
);

createClientAndConnect();

app.use('/notifications', notificationRoutes);
app.use('/subscriptions', subscriptionRoutes);
app.use('/api/v1/reactions', reactionsRouter);
app.use('/api/v1/forum', forumRouter);

setupCronJobs();

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)');
});

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
