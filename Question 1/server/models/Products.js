const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    category: String,
    price: Number,
    rating: Number,
    company: String,
    discount: Number
});

module.exports = mongoose.model('Product', productSchema);