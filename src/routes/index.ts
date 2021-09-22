import express from 'express';
import {getPostsController, addPostController} from '../controllers/post-controller';

const router = express.Router();
router.get('/post', getPostsController);
router.post('/post', addPostController);

export default router;