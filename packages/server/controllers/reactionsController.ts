import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 1,
      emoji: '❤️',
    },
    {
      id: 2,
      emoji: '😁',
    },
    {
      id: 3,
      emoji: '😂',
    },
    {
      id: 4,
      emoji: '🤡',
    },
    {
      id: 5,
      emoji: '🤬',
    },
  ]);
});

export { router as reactionsRouter };
