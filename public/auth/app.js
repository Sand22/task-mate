(function () {
  'use strict';

  angular.module('app.auth', ['ngRoute', 'app.common'])
    .run(run);

  ////**////

  /* @ngInject */
  function run($rootScope, $location, UserService) {
    $rootScope.$on('$routeChangeError', function (event, next) {
      if (next.$$route.loginRequired) {
        $location.path('/login');
      }
    });
  }
})();
