const mongoose = require('mongoose');

let stationSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model('Station', stationSchema)