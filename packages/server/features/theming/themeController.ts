import type { Request, Response } from 'express';

const THEMES = ['light', 'dark'] as const;

const userThemes: { [userId: string]: string } = {};

export function saveTheme(req: Request, res: Response) {
  const { userId } = req.params;
  const { theme } = req.body;

  if (!THEMES.includes(theme)) {
    return res.status(400).json({ message: 'Invalid theme' });
  }

  userThemes[userId] = theme;
  return res.status(200).json({ message: 'Theme saved successfully' });
}

export function getTheme(req: Request, res: Response) {
  const { userId } = req.params;
  const theme = userThemes[userId] || 'light';
  res.json({ theme });
}
