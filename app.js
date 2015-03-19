var app = require('koa')();
var render = require('koa-swig');
var body = require('koa-body');
var cache = require('koa-static-cache');
var server = require('http').createServer;
var config = require('./config');
var router = require('./router');
var models = require('./models');
var controllers = require('./controllers');

app.config = config;
app.models = models(app);
render(app, config.render);

app
  .use(body(config.body))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cache(config.cache.path, config.cache.option))

app.server = server(app.callback());
app.io = require('socket.io')(app.server);
app.io.on('connection', controllers.socketio.handler(app.io));
app.server.listen(config.port, function (err) {
  if (err) throw err;
  console.log('Server is listening on port %s', this.address().port);
});
