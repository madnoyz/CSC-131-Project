module.exports = function(app) {
  var register = require('../controllers/register.server.controller');
  app.get('/', register.render);
};
