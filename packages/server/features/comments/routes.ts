import { Router } from 'express';
import {
  createComment,
  deleteComment,
  getCommentsByTopic,
  updateComment,
} from './commentController';

export const router = Router();

router.get('/:topicId', getCommentsByTopic);
router.post('/', createComment);
router.delete('/:id', deleteComment);
router.patch('/:id', updateComment);

export { router as commentRouter };
