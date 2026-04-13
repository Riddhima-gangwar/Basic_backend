import express from 'express';
let app = express();
import jwt from 'jsonwebtoken';
let SCRET="key123"
app.use(express.json());

app.post('/login',(req,res)=>{
    let {username,password}=req.body;
       if(username=="riddhima" && password=="123"){
            let token=jwt.sign({username:"riddhima"},SCRET,{expiresIn:"1m"});
            res.send(token)
    }
    else{
        res.send({message:"Invalid credentials"});
    }
    });

app.get('/dashboard',(req,res)=>{
    let authHeader=req.headers.authorization;
    if(!authHeader){
        return res.send({message:"No token provided"});
    }
        let token=authHeader.split(" ")[1];  
        jwt.verify(token,SCRET,(err,decoded)=>{     
            if(err){
                return res.send({message:"Invalid token"});
            }
            else{
                res.send({message:"Welcome to the home page"});
            }
        })
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})