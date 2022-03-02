import express from "express";
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { ratingWidgetConnectionHandler } from "./socket/connectionHandlers/ratingWidgetConnectionHandler";
import { testsConnectionHandler } from "./socket/connectionHandlers/tests";

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

io.of('/tests').on('connection', (socket: Socket) => {
    testsConnectionHandler(socket, io);
});

io.of('/ratingWidget').on('connection', (socket: Socket) => {
    ratingWidgetConnectionHandler(socket, io);
});

export { httpServer }