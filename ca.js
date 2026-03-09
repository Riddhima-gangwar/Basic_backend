import http from 'http';
import fs from 'fs';
import zlib from 'zlib';
import EventEmitter from 'events';
class Compressor extends EventEmitter {}
const compressor = new Compressor();
compressor.on('compress', (filename, res) => {
    res.write("<h3>Compressing...</h3>");
    const readStream = fs.createReadStream(filename);
    const writeStream = fs.createWriteStream(filename + ".gz");
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);
    writeStream.on('finish', () => {
        res.write("<h3>Compression Done!</h3>");
        res.end();
    });
    readStream.on('error', () => {
        res.write("<h3>File not found!</h3>");
        res.end();
    });
});
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(`
        <html>
        <head>
        <title>File Compressor</title>
        </head>
        <body>
        <h1>Event Driven File Compressor</h1>
        <form action="/compress">
        <input type="text" name="file"
        placeholder="Enter file name (e.g. sample.txt)" required>
        <button type="submit">Compressor</button>
        </form>
        </body>
        </html>
        `);
        res.end();
    }
    else if (req.url.startsWith("/compress")) {
        const filename = req.url.split("=")[1];
        compressor.emit("compress", filename, res);
    }
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});