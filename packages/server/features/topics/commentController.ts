import type { Request, Response } from 'express'
import { models } from '../../db'

export const createComment = async (req: Request, res: Response) => {
  try {
    const { topicId, content, parentId } = req.body;

    if (!content || !topicId) {
      return res.status(400).json({ message: 'Content and topicId are required.' });
    }

    const topic = await models.Topic.findByPk(topicId);

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    const comment = await models.Comment.create({
      content,
      topicId,
      parentId: parentId || null, // Allows for nested replies
    });

    return res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getCommentsByTopic = async (req: Request, res: Response) => {
  try {
    const { topicId } = req.params;

    const topic = await models.Topic.findByPk(topicId);

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    const comments = await models.Comment.findAll({
      where: { topicId, parentId: null }, // Fetch only top-level comments
      include: [
        {
          model: models.Comment,
          as: 'replies',
          include: [{ model: models.Comment, as: 'replies' }], // Nested replies
        },
      ],
    });

    return res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const comment = await models.Comment.findByPk(id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found.' });
    }

    comment.content = content || comment.content;
    await comment.save();

    return res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const comment = await models.Comment.findByPk(id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found.' });
    }

    await comment.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
