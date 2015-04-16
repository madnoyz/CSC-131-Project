process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = 1337;
var config = require('./config/config'),
  mongoose = require('./config/mongoose'),
  express = require('./config/express.js');

var db = mongoose(),
    app = express();

app.listen(config.port);

module.exports = app;

console.log(process.env.NODE_ENV + ' Server running at http://localhost:' + config.port);
