import { Server, Socket } from 'socket.io';
const adminRoom = 'admin-room';

const ratingWidgetEvents = (socket: Socket, io: Server) => {
    socket.on('widget:join', (room: string) => {
        // validate payload.room
        socket.join(room)
        
        console.log({ room });
        io.of('/ratingWidget').in(room).emit('room-join', room);
    });

    socket.on('widget-admin:join', () => {
        // validate payload.room
        socket.join(adminRoom)

        io.of('/ratingWidget').in(adminRoom).emit('room-join', adminRoom);
    });

    socket.on('widget:change', (payload) => {
        // validate payload.room

        console.log(payload);
        io.of('/ratingWidget').in([payload.room, adminRoom]).emit('widget:change', payload);
    });
}

export { ratingWidgetEvents }