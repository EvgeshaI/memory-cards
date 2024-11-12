import { Request, Response, Router } from 'express';

const router = Router();

router.get('/topics', async (_req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 1,
      author: 'Игрок Игрок 1',
      title: 'Какая-то тема топика 1',
      description: 'Описание топика 1',
      commentsCount: 5,
    },
    {
      id: 2,
      author: 'Игрок Игрок 2',
      title: 'Какая-то тема топика 2',
      description: 'Описание топика 2',
      commentsCount: 5,
    },
    {
      id: 3,
      author: 'Игрок Игрок 3',
      title: 'Какая-то тема топика 3',
      description: 'Описание топика 3',
      commentsCount: 5,
    },
    {
      id: 4,
      author: 'Игрок Игрок 4',
      title: 'Какая-то тема топика 4',
      description: 'Описание топика 4',
      commentsCount: 5,
    },
    {
      id: 5,
      author: 'Игрок Игрок 5',
      title: 'Какая-то тема топика 5',
      description: 'Описание топика 5',
      commentsCount: 5,
    },
    {
      id: 6,
      author: 'Игрок Игрок 6',
      title: 'Какая-то тема топика 6',
      description: 'Описание топика 6',
      commentsCount: 5,
    },
    {
      id: 7,
      author: 'Игрок Игрок 7',
      title: 'Какая-то тема топика 7',
      description: 'Описание топика 7',
      commentsCount: 5,
    },
    {
      id: 8,
      author: 'Игрок Игрок 8',
      title: 'Какая-то тема топика 8',
      description: 'Описание топика 8',
      commentsCount: 5,
    },
    {
      id: 9,
      author: 'Игрок Игрок 9',
      title: 'Какая-то тема топика 9',
      description: 'Описание топика 9',
      commentsCount: 5,
    },
    {
      id: 10,
      author: 'Игрок Игрок 10',
      title: 'Какая-то тема топика 10',
      description: 'Описание топика 10',
      commentsCount: 5,
    },
  ]);
});

router.get('/topics/:id', async (_req: Request, res: Response) => {
  res.status(200).json({
    id: 1,
    author: 'Игрок Игрок 1',
    title: 'Какая-то тема топика 1',
    description: 'Описание топика 1',
    comments: [
      {
        id: 1,
        author: 'Игрок Игрок 1',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе. Это те, кого объединяет общая цель. Вам предстоит совместный путь, на котором придётся принимать общие решения, вместе учиться и распределять нагрузку, отказываться от каких-то идей и искать решения. У всех членов команды разные характеры и опыт, каждый видит процесс разработки по-своему. Одной из задач будет наладить взаимодействие внутри и выстроить процессы так, чтобы это устраивало всех членов команды.',
        date: '2024-08-31 12:00:00',
        reactions: [
          {
            id: 1,
            emoji: '❤️',
            count: 5,
            isActive: false,
          },
          {
            id: 3,
            emoji: '😂',
            count: 3,
            isActive: false,
          },
          {
            id: 4,
            emoji: '🤡',
            count: 1,
            isActive: true,
          },
        ],
      },
      {
        id: 2,
        author: 'Игрок Игрок 2',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 3,
        author: 'Игрок Игрок 3',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 4,
        author: 'Игрок Игрок 4',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 5,
        author: 'Игрок Игрок 5',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 6,
        author: 'Игрок Игрок 6',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 7,
        author: 'Игрок Игрок 7',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 8,
        author: 'Игрок Игрок 8',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 9,
        author: 'Игрок Игрок 9',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
      {
        id: 10,
        author: 'Игрок Игрок 10',
        avatar:
          'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
        text: 'Команда — это не случайные люди, оказавшиеся в одном проекте, и не сотрудники, которые сидят в одном офисе.',
        date: '2024-08-31 12:20:00',
        reactions: [],
      },
    ],
  });
});

router.get('/comments/:id/reactions', async (_req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 1,
      emoji: '❤️',
      count: 4,
      isActive: false,
    },
    {
      id: 3,
      emoji: '😂',
      count: 6,
      isActive: false,
    },
    {
      id: 4,
      emoji: '🤡',
      count: 1,
      isActive: true,
    },
  ]);
});

router.post('/reactions', async (_req: Request, res: Response) => {
  res.status(200).json({});
});

export { router as forumRouter };
