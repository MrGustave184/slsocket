import { Schema, model } from 'mongoose';

interface ActiveSession {
    clientId: string;
    projectId: string;
    room: string;
    sessionId: string;
    startTime: Date;
    endTime: Date;
    updated_at: Date;
}

const activeSessionShema = new Schema<ActiveSession>({
    clientId: String,
    projectId: String,
    room: String,
    sessionId: String,
    startTime: Date,
    endTime: Date,
    updated_at: Date
});

const ActiveSessionModel = model<ActiveSession>('ActiveSession', activeSessionShema);

export { ActiveSessionModel, ActiveSession }