import { Router } from 'express';
import {
  createTopic,
  deleteTopic,
  getAllTopics,
  getTopicById,
  updateTopic,
} from './topicController';

const router = Router();

router.get('/', getAllTopics);
router.get('/:id', getTopicById);
router.post('/', createTopic);
router.patch('/:id', updateTopic);
router.delete('/:id', deleteTopic);

export { router as topicRouter };
