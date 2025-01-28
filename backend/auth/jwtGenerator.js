import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function generateToken(user) {
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}