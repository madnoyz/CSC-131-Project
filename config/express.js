var config = require('./config'),
  express = require('express'),
  jade = require('jade'),
  stylus = require('stylus'),
  nib = require('nib'),
  bodyParser = require('body-parser'),
  flash = require('connect-flash'),
  session = require('express-session'),
  passport = require('passport');

module.exports = function() {

  var app = express();

  // Express configurations =================

  app.use(bodyParser.urlencoded ({
    extended: true
  }));

  app.use(bodyParser.json());

  // Passport login =========================
  app.use(passport.initialize());
  app.use(passport.session());

  // Flash connect error message ===================
  app.use(flash());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'OurSuperSecretCookieSecret'
  }));

  // Jade Template Views =================
  app.set('views', './app/views');
  app.set('view engine', 'jade');

  // Routes ===========================================
  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/users.server.routes.js')(app);
  require('../app/routes/login.server.routes.js')(app);
  require('../app/routes/register.server.routes.js')(app);
  require('../app/routes/employee.server.routes.js')(app);

  // Using images
  app.use(express.static('./public'));

  return app;
};
