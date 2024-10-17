import { Router } from 'express';
import { saveTheme, getTheme } from './themeController';

export const themeRoutes = Router();

themeRoutes.get('/:userId', getTheme);
themeRoutes.post('/:userId', saveTheme);
