import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { body, validationResult } from 'express-validator'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'formvalidation.html'))
})

app.post('/submit',[
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Enter a valid email')
],(req,res)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.send("Please fill all the fields correctly <a href='/'>Go back</a>")
    }

    // create object from form data
    const userData = {
        name: req.body.name,

        email: req.body.email
    }

    // save data
    fs.appendFileSync('form.txt', JSON.stringify(userData) + "\n")

    res.send(`<h2>Success</h2>
              <p>Name: ${req.body.name}</p><br>
              <p>Email: ${req.body.email}</p>`)
})

app.listen(3000, ()=>{
    console.log("server is running")
})