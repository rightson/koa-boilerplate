var assert = require('chai').assert;
var request = require('superagent');

var api_root = process.env.API_ROOT || 'http://localhost:3000'

exports.listResources = function(entry, querystring) {
    describe('GET ' + entry, function() {
        it('should return a list', function(done) {
            request
                .get(api_root + entry)
                .query(querystring)
                .end(function(err, res) {
                    if (err || !res.ok) throw err;
                    assert.equal(res.text.length > 0, true)
                    done()
                });
        });
    });
}
