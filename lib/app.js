const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/villagers', require('./controllers/villagers-router'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
