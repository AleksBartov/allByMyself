const express = require('express'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('../config/config');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  res.send(`hello ${req.body.email}`);
});

mongoose
    .connect('mongodb://AleksBartov:Merahba2018@ds247439.mlab.com:47439/aleksbartovworks')
    .then(() => {
        app.listen(config.port);
        console.log('connected to MongoDB...');
    })
    .catch((err) => console.log(err));