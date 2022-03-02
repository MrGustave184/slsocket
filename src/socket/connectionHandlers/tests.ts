import { Server, Socket } from 'socket.io';
import { testEventsHandler } from "../eventHandlers/testEventsHandler";

export const testsConnectionHandler = (socket: Socket, io: Server) => {
    testEventsHandler(socket, io);
}