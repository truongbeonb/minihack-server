const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const apiRouter = require('./routers/apiRouter');
const GameModel = require('./models/game.model');

let app = express();

mongoose.connect('mongodb://truongbeonb:talabeo1@ds025459.mlab.com:25459/minihack', (err) => {
    if(err) console.error(err)
    else console.log("Connect DB success!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Score keeper Server');
});

app.use('/api', apiRouter);

const port = process.env.PORT || 6969;

app.listen(port, (err) => {
    if(err) console.log(err)
    else console.log("App is listening at "+port+"!");
});