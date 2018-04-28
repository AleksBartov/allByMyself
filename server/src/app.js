const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
morgan = require('morgan');

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

app.post('/register', (req, res) => {
    res.send({
        message: `hello ${req.body.name}!`
    })
})

app.listen(process.env.PORT || 8081)