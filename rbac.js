import express from 'express';
const app = express();
const users={
    riddhima:{role: "admin"},
    john:{role: "teacher"},
    jane:{role: "student"}
};

const permisiion={
    admin:["dashboard","users","profile"],
    teacher:["dashboard"],
    student:["dashboard"]           

}

const getUser=(req,res,next)=>{
    const username=req.query.user;
    if(!username || !users[username]){
        return res.send("User notfound. Use ?user=navneet");
    }
    req.user=users[username];
    next();
}
app.use(getUser);

// routes
app.get("/dashboard",checkAcess("dashboard"),(req,res)=>{
    res.send("Welcome to the dashboard");
});
app.get("/users",checkAcess("users"),(req,res)=>{
    res.send("Welcome to the users page");
});
app.get("/profile",checkAcess("profile"),(req,res)=>{
    res.send("Welcome to the profile page");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}   )
