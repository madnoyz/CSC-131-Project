var config = require('./config'),
  express = require('express'),
  bodyParser = require('body-parser'),
  passport = require('passport');


module.exports = function() {
  var app = express();

  app.use(bodyParser.urlencoded ({
    extended: true
  }));

  app.use(bodyParser.json());

  // Passport login
  app.use(passport.initialize());
  app.use(passport.session());

  // EJS Template Views
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/users.server.routes.js')(app);
  // Using images
  app.use(express.static('./public'));
  return app;
};
