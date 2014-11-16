(function () {
  'use strict';

  angular.module('app.auth')
    .config(config);

  /* @ngInject */
  function config($routeProvider, $provide) {
    $routeProvider
      .when('/login', {
        templateUrl: '/views/auth/partials/login',
        controller: 'UserController',
        controllerAs: 'User'
      });
  }
})();
