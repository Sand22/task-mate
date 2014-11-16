(function () {
  angular.module('app.auth')
    .controller('UserController', UserController);

  /* @ngInject */
  function UserController(UserService) {
    this.isAuthenticated = function() {
      return UserService.isAuthenticated;
    }
  }
})();
