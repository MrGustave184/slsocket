import dotenv from 'dotenv';
import express from "express";
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { ratingWidgetConnectionHandler } from "./socket/connectionHandlers/ratingWidgetConnectionHandler";

dotenv.config({ path: __dirname + '/../.env' });

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

io.of('/ratingWidget').on('connection', (socket: Socket) => {
    ratingWidgetConnectionHandler(socket, io);
});

export { httpServer }