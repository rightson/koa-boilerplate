'use strict';

// dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


exports = module.exports = function (db) {
  var schema = new Schema({
    name: String,
    salt: String,
    is_admin: Boolean
  });
  var model = mongoose.model('User', schema);
  return model;
}
