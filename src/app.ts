import express from "express";
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { EventHandlersRegistrator } from "./services/EventHandlersRegistrator";
// import { TestHandler } from "./handlers/TestHandler";
import { EventHandler } from "./services/EventHandler";

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

// const eventHandlerRegistrator = new EventHandlersRegistrator(io);



// eventHandlerRegistrator.register('/messages', [
    
// ]);

const room = 'test room';

const testHandler = (socket: Socket) => {
    socket.join(room);
    console.clear();
    console.log('connected!');

    io.of('/tests').in(room).emit('message-redirect', 'message from server');
}

// class TestHandler implements EventHandler {
//     constructor(private room?: string) {}

//     register(io: Server, socket: Socket) {

//         if(typeof this.room !== 'undefined') {
//             socket.join(this.room);
//         }

//         console.clear();
//         console.log('connected!');
    
//         io.of('/tests').in(this.room).emit('message-redirect', 'message from server');
//     }
// }



// eventHandlerRegistrator.register('/tests', [
//     new TestHandler(room)
// ]);



io.of('/tests').on('connection', testHandler);

// io.of('/tests').on('connection', (socket: Socket) => {
//     socket.join(room);
//     console.log('connected!');
//     io.of('/tests').in(room).emit('message-redirect', 'message from server');
// });

export { httpServer }