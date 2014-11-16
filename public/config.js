(function () {
  'use strict';

  angular.module('app')
    .config(config);

  /* @ngInject */
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/common/partials/main',
        resolve: {
          user: function (UserService) {
            return UserService.getUser();
          }
        },
        loginRequired: true
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
