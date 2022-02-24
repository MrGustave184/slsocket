import { EventHandler } from "./EventHandler";
import { Server, Socket } from 'socket.io';

export class EventHandlersRegistrator {
    constructor(private io: Server) {}

    register(namespace: string, eventHandlers: EventHandler []) {
        this.io.of(namespace).on('connection', (socket) => {
            eventHandlers.forEach(handler => { handler.register(this.io, socket) })
        });
    }
}