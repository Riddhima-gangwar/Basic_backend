import express from 'express'
import userroute from './userroute.js'

const app = express()

app.use('/user', userroute)

app.listen(2000, ()=>{
    console.log("server is running")
})