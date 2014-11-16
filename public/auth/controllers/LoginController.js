(function () {
  angular.module('app.auth')
    .controller('LoginController', LoginController);

  ////**/////

  /* @ngInject */
  function LoginController($location, AuthService, UserService) {
    this.login = login;
    this.logout = logout;
    this.errors = [];

    ////**////

    function login(email, password) {
      AuthService.login(email, password).then(onSuccess, onError.bind(this));

      function onSuccess(user) {
        UserService.user = user;
        this.errors = [];
        $location.path('/');
      }

      function onError(error) {
        this.errors.push(error);
        this.errors = _.uniq(this.errors);
      }
    }

    function logout() {
      AuthService.logout();
      UserService.isAuthenticated = false;
      $location.path('/login');
    }
  }
})();
