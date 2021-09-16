const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { type: String, 
        required: [true,"Pirate Name is required!"] },
    img: { type: String, 
         required: [true,"Pirate img is required!"] },
    treasureChest: { type: String, 
        required: [true,"The Nimber of TrasureChests is required!"] },
    pirateCatchphrase: { type: String,
        required: [true,"Pirate Catchphrase is required!"] },
    crewPosition: { type: String,
        required: [true,"crewPosition is required!"] },

    pegLeg: { type: Boolean, default: true },
    eyePatch: {  type: Boolean, default: true },
    hookHand: {  type: Boolean, default: true},

    
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);