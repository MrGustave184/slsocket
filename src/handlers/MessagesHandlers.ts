import { Server, Socket } from 'socket.io';
import { EventHandler } from "../services/EventHandler";

export class MessagesHandlers implements EventHandler {
    greetUser(payload: string, socket: Socket): void {
        console.log(payload);
        socket.emit('message-redirect', payload);
    }

    register(io: Server, socket: Socket): void {
        socket.on('test:test', this.greetUser);
    }
}