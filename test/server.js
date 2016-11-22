var server = require('../index')

describe('server', function() {
    before(function() {
        server.listen(3000);
    });

    after(function() {
        server.close();
    });
});