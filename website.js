const {Console} = require ('console');
const fs = require('fs');
const http= require('http');
const port= process.env.Port|| 3000;
const server = http.createServer((req, res) => {
     res.statusCode=200;
     res.setHeader('Content-type','text/html');
    console.log(req.url);
    if(req.url=='/'){
         res.statusCode=200;
        res.end('<h1>this is code </h1> <p>hey this is the way to rock the world!</p>');
    }else if(req.url=='/about'){
         res.statusCode=200;
        res.end('<h1>this is about</h1> <p>hey this is about code</p>');
    }
    else if(req.url == '/hello')
    {
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
         res.statusCode=404;
         res.end('<h1>not found 404</h1> <p>hey this page not found</p>');
    }
});

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
