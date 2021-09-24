import {Request, Response} from 'express';
const { Kafka } = require("kafkajs");
import { Post } from '../../models/models';

export const addPostsService = async (req: Request, res: Response) => {   
    const post: Post = req.body
    console.log("Post recibido desde el front: ", post)
    if(post.titulo){
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"],
          });
        
        const producer = kafka.producer({allowAutoTopicCreation: true});
    
        await producer.connect();
    
        await producer.send({
            topic: "posts",
            messages: [{ value: JSON.stringify(post) }],
        });
    
        await producer.disconnect();
    
        res.send("Llegó data");
    } 

    return;
};