const {gzip}=require ('zlib');
const zlib= require ('zlib');
const data ="this is a node.js class";
gzip(data,(err,buffer)=>{
    if(err) return console.log(err);
    console.log(buffer.toString('base64'));

    zlib.gunzip(buffer,(err,buffer)=>{
        console.log(buffer.toString('utf-8'));
    })
})