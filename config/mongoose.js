// set up =======================

var config = require('./config'),
	mongoose = require('mongoose');

// configuration ================

module.exports = function() {
	var db = mongoose.connect('mongodb://localhost/mlh');

  require('../app/models/user.server.model.js');
	return db;
};
