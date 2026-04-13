import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}   )   