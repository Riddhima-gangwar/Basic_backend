import express from 'express';
let app = express();
import{createServer} from 'http';
import { Server } from 'socket.io';
let httpServer = createServer(app);
let io = new Server(httpServer);
import path from 'path';
import { fileURLToPath } from 'url';
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'chat.html'));
});
io.on("connection",(socket)=>{
    socket.on("chatmsg",(data)=>{
        io.emit("chatmsg",data);
    });
});
httpServer.listen(3000);