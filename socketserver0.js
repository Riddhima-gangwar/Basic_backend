import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = express();
const http = createServer(app);
const io = new Server(http);
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'socketclient0.html'));
});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("message",(msg)=>{
    console.log("Received message from client:", msg);
  });
  //socket.emit("message","Hello from server to the client");
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});
http.listen(2000, () => {
  console.log('listening on running on port no 2000');
});