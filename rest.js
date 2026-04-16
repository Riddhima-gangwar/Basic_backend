import express from 'express';
let app = express();
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/shop123');
app.use(express.json());
let productSchema = mongoose.Schema({
    name: String,
    price: Number
})
let Product = mongoose.model('Product', productSchema);
app.post('/products', async(req, res) => {
    let result = await Product.insertOne(req.body);
    res.json(result);
});
app.put('/products/:id', async(req, res) => {
    let result = await Product.updateOne({_id: req.params.id}, {$set: {name: req.body.name, price: req.body.price}});
    res.json(result);
});
 app.delete('/products/:id', async(req, res) => {
    let result = await Product.deleteOne({_id: req.params.id});
    res.json(result);
});
app.get('/products', async(req, res) => {
    let result = await Product.find({});
    res.json(result);
});
app.listen(3000);