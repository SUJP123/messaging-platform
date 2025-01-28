import { v4 as uuidv4 } from 'uuid';


export class User {
    _id;
    name;
    username;
    password;

    constructor(name, username, password) {
        this._id = uuidv4();
        this.name = name;
        this.username = username;
        this.password = password;
    }
}