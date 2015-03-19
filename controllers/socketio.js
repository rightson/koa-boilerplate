'use strict';

var logger = require('../lib/logger');

exports.handler = function (io) {
  var chatrooms = {};
  return function (socket) {
    socket.on('join', function (room) {
      chatrooms[socket.id] = room;
      socket.join(room);
      logger.debug('socketio on join, socket=%s', socket.id);
    });

    socket.on('message', function (message) {
      logger.debug('socketio on message, socket=%s', socket.id);
      var room = chatrooms[socket.id];
      io.to(room).emit('message', message);
      logger.debug('emit message to room %s', room);
    });

    socket.on('disconnect', function () {
      logger.debug('socketio on disconnect, socket=%s', socket.id);
    });
  };
};

exports.emitter = function* () {
  var option = {
    message: this.request.body.message,
    room: this.params.room
  };
  console.log('emit to room %s with message %s', option.room, option.message);
  this.app.io.to(option.room).emit('message', option.message);
  this.body = option;
};
