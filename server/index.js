const express = require('express');
const app = express();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const cors = require('./cors/index.js');
const home = require('./home/index.js');
const about = require('./about/index.js');

cors.init(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

home.init(app);
about.init(app);

module.exports = app;