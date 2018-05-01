const express = require('express'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('../config/config'),
    User = require('./models/User'),
    app = express();
    
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  async function createUser() {
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });
    await user.save()
      .then(user => console.log(user))
      .catch(err => console.error('there is a problem with your data!'));
  }
  createUser();
});

mongoose
    .connect('mongodb://AleksBartov:Merahba2018@ds247439.mlab.com:47439/aleksbartovworks')
    .then(() => {
        app.listen(config.port);
        console.log('connected to MongoDB...');
    })
    .catch((err) => console.log(err));