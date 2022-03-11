// Database conenction to mongodb atlas
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../../.env' });

import { connect } from 'mongoose';

const dbAtlasConnect = async () => {
    const DB_USER = process.env.DB_USER || 'webdevelopment';
    const DB_PASSWORD = process.env.DB_PASSWORD || '';
    const DB_CLUSTER = process.env.DB_CLUSTER || 'sl-test';
    const DB_NAME = process.env.DB_NAME || 'VirtualogicStatistics';
    
    let uri = '';

    if (process.env.DB_CONNECTION_MODE === 'srv') {
        uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.dlvvc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
    }

    if (process.env.DB_CONNECTION_MODE === 'shards') {
        uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}-shard-00-00.dlvvc.mongodb.net:27017,${DB_CLUSTER}-shard-00-01.dlvvc.mongodb.net:27017,${DB_CLUSTER}-shard-00-02.dlvvc.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-tgq0lp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    }
    
    try {
        await connect(uri);
        console.log('Connected to DB!')
    } catch (error) {
        console.log(error);
    }
}

export { dbAtlasConnect }