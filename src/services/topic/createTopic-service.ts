import {Request, Response} from 'express';
const { Kafka } = require("kafkajs");

export const createTopicService = async (req: Request, res: Response) => {   
    const usuario: string = req.body.nombreUsuario
    console.log(req.body)
    const usuarioPosts = usuario + "-posts"
    const usuarioNotificaciones = usuario + "-notificaciones"  

    console.log("Usuario recibido desde el front: ", usuario)

    if(usuario){
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"],
          });

        const producer = kafka.producer({allowAutoTopicCreation: true});
    
        await producer.connect();
    
        await producer.send({
            topic: usuarioPosts,
            messages: [{ value: "Comienzo de actividad" }],
        });

        await producer.send({
            topic: usuarioNotificaciones,
            messages: [{ value: "Comienzo de actividad" }],
        });

        await producer.disconnect();
    
        res.send("Topics creados");
    } 

    return;
};