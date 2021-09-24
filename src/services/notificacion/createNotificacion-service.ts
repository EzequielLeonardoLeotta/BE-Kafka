import {Request, Response} from 'express';
const { Kafka } = require("kafkajs");

export const createNotificacionService = async (req: Request, res: Response) => {   
    if(req.body){
        console.log("Post recibido desde el front: ", req.body)

        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"],
          });
        
        const producer = kafka.producer({allowAutoTopicCreation: true});
    
        await producer.connect();
    
        await producer.send({
            topic: "notificaciones",
            messages: [{ value: JSON.stringify(req.body) }],
        });
    
        await producer.disconnect();
    
        res.send("Llegó data");
    } 

    return;
};