import { Server, Socket } from 'socket.io';
import { ratingWidgetEventsHandler } from '../eventHandlers/ratingWidgetEventHandlers';

export const ratingWidgetConnectionHandler = (socket: Socket, io: Server) => {
    ratingWidgetEventsHandler(socket, io);
}