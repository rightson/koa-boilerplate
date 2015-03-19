var controllers = require('./controllers');

var router = exports = module.exports = require('koa-router')();

router.get('/', controllers.views.index);
router.post('/io/:room', controllers.socketio.emitter);
