const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world!2')
})

app.get('/about', (req, res) => {
    res.send('this is about page!')
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})