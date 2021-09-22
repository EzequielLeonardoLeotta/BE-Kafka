import express from 'express';
import routes from '../routes/index';
import cors from 'cors';
const { Kafka } = require("kafkajs");

const server = express();
server.use(express.json());

server.get('/', (_: any, res: any) => res.send('be-node-js is up!'));
server.use(cors());
server.use('', routes);

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

export var posts:Array<string> = [] 

const consume = async () => {
    const consumer = kafka.consumer({ groupId: "test-group" });

    await consumer.connect();

    await consumer.subscribe({ topic: "posts", fromBeginning: true });

    await consumer.run({
        //@ts-ignore
        eachMessage: async ({ topic, partition, message }) => {
            posts.push(JSON.parse(message.value.toString()))
            console.log("Mensaje pusheado a array. Mensaje: ", message.value.toString())
        },
    });
}

consume()

export default server;