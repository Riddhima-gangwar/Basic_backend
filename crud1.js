import express from 'express'
let app = express()
import path from 'path'
import { fileURLToPath } from 'url'
let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)
app.use(express.urlencoded({ extended: false }))
mongoose.connect('mongodb://localhost:27017/shop123')
let productSchema = mongoose.Schema({
    name: String,
    price: Number
})
let Product = mongoose.model('Product', productSchema)
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'crud1.html'))
})
app.get('/show', async(req, res) => {
    await Product.find({})
    res.send(result)
})
app.post('/add', async(req, res) => {
    let result = await Product.insertOne(req.body)
    res.send(`product addeed successfully: ${result}`)
})
app.post('/update', async(req, res) => {
    let result = await Product.updateOne({id: req.body.id}, {$set: {name: req.body.name, price: req.body.price}})
    res.send(`product updated successfully--> Matched count:${result.matchedCount}, Modified count:${result.modifiedCount}`)
})
app.post('/delete', async(req, res) => {
    let result = await Product.deleteOne({id: req.body.id})
    res.send(`product deleted successfully--> Deleted count:${result.deletedCount}`)
})
app.listen(3000)
