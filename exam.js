// create a server that listens on port 3000 that uses compressor event emmiter + streams to compress a file called "input.txt" browser should show compressing and compress done!
// use zlib to compress the file on the server side it shows heading as Event Drive File Compressor 
//it should show in placeholder format button  showing  "enter file name(e.g. sample.txt") with button aside that says "compressor"
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const EventEmitter = require('events');
class Compressor extends EventEmitter {}
const compressor = new Compressor();
compressor.on('compress', (filename, res) => {
    const input = fs.createReadStream(filename);
    const output = fs.createWriteStream(filename + '.gz');
    const gzip = zlib.createGzip();
    res.write("<h3>Compressing...</h3>");
    input.pipe(gzip).pipe(output);
    output.on('finish', () => {
        res.write("<h3>Compression Done!</h3>");
        res.end();
    });
});
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (req.url.startsWith('/compress')) {
        const filename = req.url.split('=')[1];
        compressor.emit('compress', filename, res);
    }
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
