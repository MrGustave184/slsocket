import { Server, Socket } from 'socket.io';
import { EventHandler } from "../services/EventHandler";

export class TestHandler implements EventHandler {
    greetUser(payload: string, socket: Socket): string {
        console.log(payload);
        socket.emit('message-redirect', payload);
        return payload;
    }

    register(io: Server, socket: Socket, payload: string): void {
        socket.on('test:test', this.greetUser);
    }
}