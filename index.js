const express = require('express')
const app = express();

//retrieve all stations
app.get('/stations', (req, res) => {
    res.send('stations!')
});

//retrieve all cars
app.get('/cars', (req, res) => {
    res.send('cars!')
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});