import express , {json} from 'express';
import { Server } from "socket.io";
import cors from "cors";
import {registerUser, authenticateUser} from "./control/userController.js";
import { authenticateToken } from './auth/middleware.js';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5050;

// User Routes
app.post("/api/user/register", async (req, res) => {
    try {
        const result = await registerUser(req);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.post("/api/user/authenticate", async (req, res) => { 
    try {
        const result = await authenticateUser(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});




// WebSocket Server Initialization
const socket = new Server(8080, { cors: { origin: "*" } });




// Server Starting
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });