(function () {
  'use strict';

  angular.module('app.auth')
    .factory('UserService', UserService);

  /* @ngInject */
  function UserService($q, $timeout) {
    return {
      isAuthenticated: isAuthenticated
    };

    ////**////

    function isAuthenticated() {
      var dfd = $q.defer();

      $timeout(function () {
        dfd.reject(false);
      }, 0);

      return dfd.promise;
    }
  }
})();
