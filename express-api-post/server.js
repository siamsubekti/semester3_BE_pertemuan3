const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/Student');

const mongoose = require('./utilities/mongooseConfig')();

const route = require('./routes/route');
const config = require('./utilities/config').config;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use((err, req, res, next) => {
    return res.send({
        "statusCode": 401,
        "statusMessage": "Something went wrong"
    });
});

app.use(route);

app.use((req, res, next) => {
    next();
});

server.listen(config.NODE_SERVER_PORT.port, () => {
    console.log('app listerningon port: ' + config.NODE_SERVER_PORT.port);
});