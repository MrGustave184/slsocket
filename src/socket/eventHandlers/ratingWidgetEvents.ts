import { Server, Socket } from 'socket.io';
import { ActiveSessionModel, ActiveSession } from '../../models/activeSession';

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

    socket.on('widget:change', async (payload: ActiveSession) => {
        // validate payload.room

        try {
            let activeSession = await ActiveSessionModel.findOne({
                clientId: payload.clientId,
                projectId: payload.projectId,
                room: payload.room
            });

            if (activeSession) {
                activeSession.set({ sessionId: payload.sessionId });
            } else {
                const newActiveSession = new ActiveSessionModel(payload);
                await newActiveSession.save();
            }

            io.of('/ratingWidget').in([payload.room, adminRoom]).emit('widget:change', activeSession);
        } catch(error) {
            throw new Error('Active session could not be saved');
        }
    });
}

export { ratingWidgetEvents }