process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = 1337;

// Module dependencies =======================

var config = require('./config/config'),
  mongoose = require('./config/mongoose'),
  express = require('./config/express.js'),
  passport = require('./config/passport.js'),
  moment = require('moment');

var db = mongoose(),
    app = express(),
    passport = passport(),
    moment = moment();

//
app.listen(config.port);

module.exports = app;

console.log(process.env.NODE_ENV + ' Server running at http://localhost:' + config.port);
