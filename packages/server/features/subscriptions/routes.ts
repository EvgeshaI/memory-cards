import { Router } from 'express';
import { subscribe } from './subscriptionController';

export const subscriptionRoutes = Router();

subscriptionRoutes.post('/subscribe', subscribe);
