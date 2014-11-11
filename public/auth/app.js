(function () {
  'use strict';

  angular.module('app.auth', ['ngRoute'])
    .run(run);

  ////**////

  /* @ngInject */
  function run($rootScope, $location, UserService) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.$$route.roles && next.$$route.roles.length) {
        UserService.isAuthenticated().then(function () {
          return;
        }, function () {
          $location.path('/login');
        });
      }
    });
  }
})();
