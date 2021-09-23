import { Request, Response } from 'express';
import { addPostsService } from '../services/post/addPost-service';
import { getPostsService } from '../services/post/getPosts-service';
import { likePostService } from '../services/post/likePostService-service';

export const getPostsController = async (req: Request, res: Response): Promise<any> => {
    try {
        await getPostsService(req, res);
    } catch (e) {
        throw e;
    }
};

export const addPostController = async (req: Request, res: Response): Promise<any> => {
    try {
        await addPostsService(req, res);
    } catch (e) {
        throw e;
    }
};

export const likePostController = async (req: Request, res: Response): Promise<any> => {
    try {
        await likePostService(req, res);
    } catch (e) {
        throw e;
    }
};