import { Server, Socket } from 'socket.io';

const testEventsHandler = (socket: Socket, io: Server) => {
    const room = 'test-room';
    socket.join(room);
    console.clear();
    console.log('connected!');

    io.of('/tests').in(room).emit('message-redirect', 'message from server');
}

export { testEventsHandler }