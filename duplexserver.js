import {createServer} from 'net';
const server =createServer((socket)=>{
    console.log("client connected");
    socket.on('data',(data)=>{
        console.log("received",data.toString());
        socket.write("Hello Client!");
    })
    socket.on('end',()=>{
        console.log("client disconnected");
    })
})
server.listen(3000,()=>{
    console.log("server listening on port 3000");
})
