import dotenv from 'dotenv';
dotenv.config();

import client from './client.js';

const db = process.env.MONGO_DB;
const collection = process.env.MONGO_USER_COLLECTION;


async function inputUser(request) {
    try {
        const result = await client.db(db).collection(collection).insertOne({
            "_id": request._id, 
            "name": request.name,  
            "username": request.username,
            "password": request.password }
        );
        return result;
    } catch (error) {
        console.error("ERROR INSERTING USER : ", error);
    }
}

async function getUserWithUsername(username) {
    try {
        const result = await client.db(db).collection(collection).findOne({ "username": username });
        return result;
    } catch (error) {   
        console.error("ERROR FETCHING USER : ", error);
    } 
}

export {inputUser, getUserWithUsername};