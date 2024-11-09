import type { Request, Response } from 'express';
import type { IComment } from '../../models';
import { Topic, Comment } from '../../models';

export const createComment = async (req: Request, res: Response) => {
  try {
    const { topic_id, content, parent_id, author_id }: Omit<IComment, 'id'> =
      req.body;
    if (!content || !topic_id) {
      return res
        .status(400)
        .json({ message: 'Content and topicId are required.' });
    }

    const topic = await Topic.findByPk(topic_id);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    const comment = await Comment.create({
      content,
      topic_id,
      author_id,
      parent_id: parent_id || null,
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

    const topic = await Topic.findByPk(topicId);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found.' });
    }

    const comments = await Comment.findAll({
      where: { topic_id: topicId, parent_id: null }, // Fetch only top-level comments
      include: [
        {
          model: Comment,
          as: 'replies',
          include: [{ model: Comment, as: 'replies' }], // Nested replies
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
    const { content }: Omit<IComment, 'id'> = req.body;

    if (!content) {
      return res.status(400).json({ message: 'Content required.' });
    }

    const comment = await Comment.findByPk(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found.' });
    }

    await comment.update({ content });

    return res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findByPk(id);

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
