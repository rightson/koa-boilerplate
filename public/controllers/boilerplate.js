angular.module('boilerplate')
  .controller('mainController', function ($scope, socketioService) {
    socketioService.on('connect', function () {
      socketioService.emit('join', 'room');
    });

    socketioService.on('message', function (message) {
      console.log('socketio on message %s', message);
      $scope.message = message;
    });
  });
