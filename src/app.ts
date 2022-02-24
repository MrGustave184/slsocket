import express from "express";
import { createServer } from 'http';
import { Server } from 'socket.io';
import { EventHandlersRegistrator } from "./services/EventHandlersRegistrator";
import { TestHandler } from "./handlers/testHandler";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const eventHandlerRegistrator = new EventHandlersRegistrator(io);

eventHandlerRegistrator.register('/tests', [
    new TestHandler(),
]);

export { httpServer }