var port = 1337;
var express = require('./config/express.js');
var app = express();

app.listen(port);
module.exports = app;

console.log('Server running at http://localhost:' + port);
