import { Request, Response } from 'express';
import { getNotificacionesService } from '../services/notificacion/getNotificaciones-service';
import { createNotificacionService } from '../services/notificacion/createNotificacion-service';

export const getNotificacionesController = async (req: Request, res: Response): Promise<any> => {
    try {
        await getNotificacionesService(req, res);
    } catch (e) {
        throw e;
    }
};

export const createNotificacionController = async (req: Request, res: Response): Promise<any> => {
    try {
        await createNotificacionService(req, res);
    } catch (e) {
        throw e;
    }
};
