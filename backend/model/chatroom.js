import { v4 as uuidv4 } from 'uuid';


export class Chatroom { 
    _id;
    name;
    users;
    messages;

    constructor(name) {
        this._id = uuidv4();
        this.name = name;
        this.users = [];
        this.messages = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    addMessage(message) {
        this.messages.push(message);
    }
}