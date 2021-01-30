
const mongoose = require('./db');

const slotSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    is_full: { type: Boolean, required: true },
    status: { type: Number, default: 1 }
});

module.exports = mongoose.model('slot', slotSchema);