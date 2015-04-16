var express = require('express');
module.exports = function() {
  var app = express();

  // EJS Template Views
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require('../app/routes/index.server.routes.js')(app);
  // Using images
  app.use(express.static('./public'));
  return app;
};
