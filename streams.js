// fs.createReadStream
// fs.createWriteStream
// Socket And compression


//#write a node.js script that creates a writable stream to write "hello world!" into a file named sample.txt , then reads the content from the same file using a readabe stream and prints it to the console. ensure the file is read only after writing is complete .
const fs = require('fs');
const writable = fs.createWriteStream('file.txt');
writable.write('hello world!');
writable.end(()=>{
    const readable=fs.createReadStream('file.txt');
    readable.on('data',(chunk)=>{
        console.log('read from file:',chunk.toString());
    });
});