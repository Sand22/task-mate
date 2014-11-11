angular.module('taskMate', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        templateUrl: '/views/common/partials/main'
      })
      .when('/404', {
        templateUrl: '/views/common/partials/404'
      })
      .otherwise({
        redirectTo: '/404'
      });

    $locationProvider.html5Mode(true);

  });
