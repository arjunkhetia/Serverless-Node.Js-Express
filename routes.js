var express = require('express');
var app = express();

// Defining all the routes
var index = require('./routes/index');
var users = require('./routes/users');

// Linking all the routes
app.use('/users', users);
app.use('/', index);

module.exports = app;
