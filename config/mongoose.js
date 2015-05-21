// set up =======================

var config = require('./config'),
	mongoose = require('mongoose');

// configuration ================

module.exports = function() {
	var db = mongoose.connect('mongodb://csc131:csc131@ds039960.mongolab.com:39960/mlh');

  require('../app/models/user.server.model.js');
	return db;
};
