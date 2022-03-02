import { Server, Socket } from 'socket.io';
import { ratingWidgetEvents } from '../eventHandlers/ratingWidgetEvents';
import { widgetNotifications } from "../eventHandlers/widgetNotifications";

export const ratingWidgetConnectionHandler = (socket: Socket, io: Server) => {
    ratingWidgetEvents(socket, io);
    widgetNotifications(socket, io);
}