const mongoose = require('mongoose');

let stationSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

function test () {
    return "hello"
}

module.exports = mongoose.model('Station', stationSchema)