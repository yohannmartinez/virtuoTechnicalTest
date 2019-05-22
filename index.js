const express = require('express');
const app = express();
let StationModel = require('./models/station');
let CarModel = require('./models/car');

//retrieve all stations
app.get('/stations', (req, res) => {
    res.send('stations retireved')
});

//retrieve all cars
app.get('/cars', (req, res) => {
    res.send('cars retireved')
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});