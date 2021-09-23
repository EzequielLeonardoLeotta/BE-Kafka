import { Request, Response } from 'express';
import { createTopicService } from '../services/topic/createTopic-service';

export const createTopicController = async (req: Request, res: Response): Promise<any> => {
    try {
        await createTopicService(req, res);
    } catch (e) {
        throw e;
    }
};