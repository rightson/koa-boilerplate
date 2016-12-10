var path = require('path');
var assert = require('chai').assert;
var request = require('superagent');

var api_root = process.env.API_ROOT

exports.listResources = function(entry, querystring) {
    describe('GET ' + entry, function() {
        it('should return a list', function(done) {
            request
                .get(api_root + entry)
                .query(querystring)
                .end(function(err, res){
                    if (err || !res.ok) throw err;
                    assert.equal(res.text.length > 0, true)
                    done()
                });
        });
    });
}

exports.createResources = function(entry, testfile) {
    describe('POST ' + entry, function() {
        it('should return an created object', function(done) {
            request
                .post(api_root + entry)
                .send(require(testfile))
                .end(function(err, res){
                    if (err || !res.ok) throw err;
                    //console.log('POST ' + entry + ' -> created');
                    request.delete(api_root + entry + '/' + res.body._id).end(function(err, res) {
                        if (err || !res.ok) throw err;
                        //console.log('DELETE ' + entry + '/' + res.body._id + ' -> deleted');
                        done()
                    })
                });
        });
    });
}
