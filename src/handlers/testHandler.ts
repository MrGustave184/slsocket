import { Server, Socket } from 'socket.io';
import { EventHandler } from "./../services/EventHandler";

export class TestHandler implements EventHandler{
    greetUser() {
        console.log('hello world!');
    }

    register(io: Server, socket: Socket): void {
        socket.on('test:test', this.greetUser);
    }
}