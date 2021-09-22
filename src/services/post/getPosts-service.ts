import {Request, Response} from 'express';
import {posts} from '../../server/index' 

export const getPostsService = async (req: Request, res: Response) => {   
    console.log("Array enviado al front: ", posts)
    res.send(posts);

    return;
};