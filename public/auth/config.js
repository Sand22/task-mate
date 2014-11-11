(function () {
  'use strict';

  angular.module('app.auth')
    .config(config);

  /* @ngInject */
  function config($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/views/auth/partials/login'
      });
  }
})();
