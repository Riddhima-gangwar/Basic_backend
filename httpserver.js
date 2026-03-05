const {Console} = require('console');
const http = require('http');
const port=process.env.PORT|| 2000;
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<h1> This is server</h1> <p> hello world!</p>');
})
server.listen(port,()=>{

console.log(`server is listnening on port ${port}`);
});


