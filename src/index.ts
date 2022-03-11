import dotenv from 'dotenv';
import { httpServer } from './app';

dotenv.config({ path: __dirname + '/../.env' });

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT);