const createServer =require('net');
const server= createServer((Socket)=>{
    console.log('client connected');
    socket.on('data', (data)=>{
        console.log('received',data.toString());
        socket.write("hello from server ");
    })

    socket.on('end',()=>{
        console.log('client disconnected');
    })
})
server.listen(2000,()=>{
    console.log("server is listening on port 2000")
})