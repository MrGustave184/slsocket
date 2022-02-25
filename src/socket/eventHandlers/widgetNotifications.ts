import { Server, Socket } from 'socket.io';

const widgetNotifications = (socket: Socket, io: Server) => {
    const room = 'test-room';
    socket.join(room);

    socket.on('widget:change', (payload) => {
        console.log('widget changing: ' + payload);
    });
}

export { widgetNotifications }