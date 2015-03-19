var mongoose = require('mongoose');

exports = module.exports = function (app) {
  app.db = mongoose.connect(app.config.mongodb.uri);
  app.db.connection.on('error', function (err) {
    throw err;
  });

  return {
    User: require('./user')(app.db),
  }
}
