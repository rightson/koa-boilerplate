process.env.NODE_ENV = 'test'
process.env.PORT = 3001
process.env.API_ROOT = 'http://localhost:3001'

var mongoose = require('mongoose')
var server = require('../index')

mongoose.set('debug', false)

describe('server', function() {
    before(function() {
        server.listen(3001);
    });

    after(function() {
        server.close();
    });
});
