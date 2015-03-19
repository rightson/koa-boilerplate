angular.module("boilerplate")
  .service('socketioService', function ($rootScope, STATIC_ROOT) {
    var socket = (STATIC_ROOT === '/') ? io() : io({
      path: STATIC_ROOT
    });

    this.on = function (event, callback) {
      socket.on(event, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    }

    this.emit = function (event, data, callback) {
      socket.emit(event, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  });
