import type { Request, Response } from 'express'
import { models } from '../../db'

export const createTopic = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required.' });
    }

    const topic = await models.Topic.create({ title, content });
    return res.status(201).json(topic);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getAllTopics = async (_req: Request, res: Response) => {
  try {
    const topics = await models.Topic.findAll({
      include: [
        {
          model: models.Comment,
          as: 'comments',
          include: [{ model: models.Comment, as: 'replies' }],
        },
      ],
    });
    return res.status(200).json(topics);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getTopicById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const topic = await models.Topic.findByPk(id, {
      include: [
        {
          model: models.Comment,
          as: 'comments',
          include: [{ model: models.Comment, as: 'replies' }],
        },
      ],
    });

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    return res.status(200).json(topic);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const updateTopic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const topic = await models.Topic.findByPk(id);

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    topic.title = title || topic.title;
    topic.content = content || topic.content;

    await topic.save();
    return res.status(200).json(topic);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const deleteTopic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const topic = await models.Topic.findByPk(id);

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    await topic.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
