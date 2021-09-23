import express from 'express';
import {getPostsController, addPostController, likePostController} from '../controllers/post-controller';
import {createTopicController} from '../controllers/createTopicController'
const router = express.Router();

router.get('/post', getPostsController);
router.post('/post', addPostController);
router.post('/createTopic', createTopicController);
router.post('/likePost', likePostController);

export default router;