import { Server, Socket } from 'socket.io';
import { ratingWidgetEvents } from '../eventHandlers/ratingWidgetEvents';

export const ratingWidgetConnectionHandler = (socket: Socket, io: Server) => {
    ratingWidgetEvents(socket, io);
}