(function() {
  'use strict';

  angular.module('app')
    .config(config);

  /* @ngInject */
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/common/partials/main',
        roles: ['user']
      })
      .when('/404', {
        templateUrl: '/views/common/partials/404'
      })
      .otherwise({
        redirectTo: '/404'
      });

    $locationProvider.html5Mode(true);
  }
})();
