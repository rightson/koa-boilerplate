var server = require('../index')

describe('server', function() {
    before(function() {
        server.listen(3001);
    });

    after(function() {
        server.close();
    });
});