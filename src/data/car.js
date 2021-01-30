
const mongoose = require('./db');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    brand: { type: String },
    model: { type: String },
    status: { type: Number, default: 1 }
});
module.exports = mongoose.model('car', carSchema);
