import { v4 as uuidv4 } from 'uuid';


export class User {
    _id;
    name;
    username;
    email;
    password;

    constructor(name, username, email, password) {
        this._id = uuidv4();
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}