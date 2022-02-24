import { Server, Socket } from 'socket.io';

export interface EventHandler {
    register(io: Server, socket: Socket): void;
}