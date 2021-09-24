import {Request, Response} from 'express';
import {notificaciones} from '../../server/index' 

export const getNotificacionesService = async (req: Request, res: Response) => {   
    console.log("Array enviado al front: ", notificaciones)
    res.send(notificaciones);

    return;
};