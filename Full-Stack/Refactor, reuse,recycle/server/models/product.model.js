const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String ,
        required: [true, "Title is required"] ,
        minLength:[3, "Title should be at least 3 characters"]},
    price: { type: Number },
    description: { type: String },
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
