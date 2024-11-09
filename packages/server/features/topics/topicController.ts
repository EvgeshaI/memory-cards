import type { Request, Response } from 'express';
import type { ITopic } from '../../models';
import { Comment, Topic } from '../../models';

export const createTopic = async (req: Request, res: Response) => {
  try {
    const { title, content, author_id }: Omit<ITopic, 'id'> = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: 'Title and content are required.' });
    }

    const topic = await Topic.create({ title, content, author_id });
    return res.status(201).json(topic);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getAllTopics = async (_req: Request, res: Response) => {
  try {
    const topics = await Topic.findAll({
      include: [
        {
          model: Comment,
          as: 'comments',
          include: [{ model: Comment, as: 'replies' }],
        },
      ],
    });

    return res.status(200).json(topics);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getTopicById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const topic = await Topic.findByPk(id, {
      include: [
        {
          model: Comment,
          as: 'comments',
          include: [{ model: Comment, as: 'replies' }],
        },
      ],
    });
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    return res.status(200).json(topic);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const updateTopic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content }: Partial<Omit<ITopic, 'id'>> = req.body;

    const topic = await Topic.findByPk(id);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    await topic.update({ title, content });

    return res.status(200).json(topic);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const deleteTopic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const topic = await Topic.findByPk(id);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    await topic.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
