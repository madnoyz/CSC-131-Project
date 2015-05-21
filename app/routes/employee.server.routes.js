module.exports = function(app) {
  var employee = require('../controllers/employee.server.controller');
  app.get('/', employee.render);
};
