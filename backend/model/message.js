import {v4 as uuidv4} from 'uuid';

export class Message { 
    _id;

    // Id Variable of Chatroom
    chatroomId;

    // Actual Message Content
    content;

    // Id Variable of Sender
    sender;
    timestamp;

    constructor(content, sender, chatroomId) {
        this._id = uuidv4();
        this.chatroomId = chatroomId;
        this.content = content;
        this.sender = sender;
        this.timestamp = new Date();
    }
}