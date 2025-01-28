import { User } from "../model/user.js"
import bcrypt from "bcrypt"
import { generateToken } from "../auth/jwtGenerator.js"
import { getUserWithUsername, inputUser } from "../database/userData.js"
import { AuthResponse } from "../auth/authResponse.js";


async function registerUser(request) {

    try {
        const { name, username, password } = request.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User(name, username, hashedPassword);
    
        // Logic to Add user to mongoDB
        const res = await inputUser(user);

        // Generate Auth Token
        const payload = {"_id": user._id, "name": user.name, "username": user.username, "password": user.password};
        const token = await generateToken(payload);
        return new AuthResponse(token);
    } catch(error) {
        console.error("Error in Register Controller : " , error);
    }
}

async function authenticateUser(request) {
    try {
        const { username, password } = request.body;

        // Logic to fetch user from mongoDB
        const user = await getUserWithUsername(username);
        console.log(user);
        if (!user) {
            throw new Error("User not found");
        }
        
        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Invalid credentials");
        }
        
        // If Valid : Generate Auth Token
        const payload = {"_id": user._id, "name": user.name, "username": user.username, "password": user.password};
        const token = await generateToken(payload);
        return new AuthResponse(token);
    } catch (error) {
        console.error(error);
    }
}

export { registerUser, authenticateUser };