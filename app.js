require('dotenv').config();
const express = require('express');
const database = require('./database');

const app = express();

database.connect();

app.get('/', (req, res) => {
  res.send('<h1>Server is working</h1>');
});

module.exports = app;
