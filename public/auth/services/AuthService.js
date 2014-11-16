(function () {
  'use strict';

  angular.module('app.auth')
    .factory('AuthService', AuthService);

  /* @ngInject */
  function AuthService($firebaseSimpleLogin, firebaseUtils) {
    var auth = $firebaseSimpleLogin(firebaseUtils.ref);

    return {
      login: login,
      logout: logout
    };

    function login(email, password) {
      return auth.$login('password', {
        email: email,
        password: password,
        rememberMe: false
      });
    }

    function logout() {
      auth.$logout();
    }
  }
})();
