import dotenv from 'dotenv';
import { dbAtlasConnect } from './config/db';
import { httpServer } from './app';

dotenv.config({ path: __dirname + '/../.env' });

const PORT = process.env.PORT || 3000;

// dbAtlasConnect();
dbAtlasConnect();

httpServer.listen(PORT);