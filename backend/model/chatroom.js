import { v4 as uuidv4 } from 'uuid';


export class Chatroom { 
    _id;
    name;
    users;
    messages;
    joinCode;

    constructor(name) {
        this._id = uuidv4();
        this.name = name;
        this.users = [];
        this.messages = [];
        this.joinCode = generateJoinCode();
    }

    generateJoinCode() {
        let nums = "0123456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += nums[Math.floor(Math.random() * 10)];
        }
        return code;
    }

    addUser(user) {
        this.users.push(user);
    }

    addMessage(message) {
        this.messages.push(message);
    }
}