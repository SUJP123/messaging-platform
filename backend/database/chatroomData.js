import dotenv from 'dotenv';
dotenv.config();

import client from './client.js';

const db = process.env.MONGO_DB;
const collection = process.env.MONGO_CHATROOM_COLLECTION;

