import createserver from 'http';
const server = createserver((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}
);
server.listen(3000, 'localhost');
