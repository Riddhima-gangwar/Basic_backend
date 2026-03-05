const createConnection = require ('net');
const client = createConnection({port:2000}, ()=>{
    console.log("connected to server");
})
client.on('data',(data)=>{
    console.log("received",data.toString());
    client.end();
})
client.on('end', ()=>{
    console.log("disconnected from server");
})
