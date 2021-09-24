import express from 'express';
import {getPostsController, addPostController, likePostController} from '../controllers/post-controller';
import {createTopicController} from '../controllers/createTopicController'
import {getNotificacionesController, createNotificacionController} from '../controllers/notificacion-controller';
const router = express.Router();

router.get('/post', getPostsController);
router.post('/post', addPostController);
router.post('/createTopic', createTopicController);
router.post('/likePost', likePostController);
router.get('/notificacion', getNotificacionesController);
router.post('/notificacion', createNotificacionController);

export default router;