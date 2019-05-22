const mongoose = require('mongoose');

let carSchema = new mongoose.Schema({
    name: String,
    available: Boolean,
})

module.exports = mongoose.model('Car', carSchema)