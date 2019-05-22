const mongoose = require('mongoose');

let carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    available: Boolean,
})

module.exports = mongoose.model('Car', carSchema)