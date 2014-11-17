(function () {
  'use strict';

  angular.module('app.auth')
    .factory('UserService', UserService);

  function UserService($firebaseSimpleLogin, firebaseUtils, $q) {
    var auth = $firebaseSimpleLogin(firebaseUtils.ref);

    return {
      getUser: getUser,
      isAuthenticated: false
    };

    ////**////

    function getUser() {
      var dfd = $q.defer();

      auth.$getCurrentUser().then(function (user) {
        if(!user) {
          dfd.reject('Not authorized!');
          return;
        }

        this.isAuthenticated = true;
        dfd.resolve(user);
      }.bind(this));

      return dfd.promise;
    }
  }
})();
