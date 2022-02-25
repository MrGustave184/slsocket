import { Server, Socket } from 'socket.io';

const ratingWidgetEventsHandler = (socket: Socket, io: Server) => {
    const room = 'test-room';
    socket.join(room);

    socket.on('test:test', (payload) => {
        console.log('receiving payload: ' + payload);
    });
}

export { ratingWidgetEventsHandler }