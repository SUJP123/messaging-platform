import express , {json} from 'express';
import Server from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;


// WebSocket Server Initialization
const socket = new Server(8080, { cors: { origin: "*" } });




// Server Starting
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });