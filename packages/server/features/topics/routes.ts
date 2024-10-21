const express = require('express');
const { Topic, Comment } = require('./models');
const auth = require('./middleware/auth');

const router = express.Router();

// Создание темы
router.post('/topics', auth, async (req: { body: any; user: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
  try {
    const topic = await Topic.create({ ...req.body, userId: req.user.id });
    res.status(201).json(topic);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Получение всех тем
router.get('/topics', auth, async (_req: any, res: { json: (arg0: any) => void; }) => {
  const topics = await Topic.findAll({ include: [Comment] });
  res.json(topics);
});

// Добавление комментария
router.post('/comments', auth, async (req: { body: any; user: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
  try {
    const comment = await Comment.create({ ...req.body, userId: req.user.id });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Получение комментариев для конкретной темы
router.get('/topics/:id/comments', auth, async (req: { params: { id: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
  try {
    const comments = await Comment.findAll({
      where: { topicId: req.params.id, parentId: null },
      include: { model: Comment, as: 'replies' },
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
