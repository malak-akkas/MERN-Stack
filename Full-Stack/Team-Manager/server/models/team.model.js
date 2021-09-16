const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "Name is required"] ,
        minLength:[3, "Name should be at least 3 characters"]},
    position: { type: String },

}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);
