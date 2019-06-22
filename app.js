var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var compression = require('compression');
var helmet = require('helmet');

// Defining routes
var routes = require('./routes');

// Generating an express app
var app = express();

// view engine setup - Express-Handlebars
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Allowing access headers and requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE, CONNECT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(helmet());

// compress all responses
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'ficon.ico')));

// Linking routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  // uncomment to just send error as JSON
  // res.send({"message":"404 Page Not Found..!"});
  // uncomment to render the error page
   res.render('error', { message: '404 Page Not Found..!' });
});

module.exports = app;
