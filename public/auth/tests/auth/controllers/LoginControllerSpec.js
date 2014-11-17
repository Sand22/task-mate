describe('UserController', function () {

  'use strict';

  var LoginController, UserService, scope;

  beforeEach(module('app.auth', function ($provide) {
    $provide.value('UserService', {
      isAuthenticated: false
    });
    $provide.factory('AuthService', function ($q) {
      return {
        login: function (email, pass) {
          var dfd = $q.defer();
          if(pass) {
            dfd.resolve({email: 'admin@example.com'});
          } else {
            dfd.reject();
          }
          return dfd.promise;
        },
        logout: function () {
          var dfd = $q.defer();
          dfd.resolve();
          return dfd.promise;
        }
      };
    });
  }));
  beforeEach(inject(function ($controller, $rootScope, _UserService_) {
    UserService = _UserService_;
    scope = $rootScope.$new();
    LoginController = $controller('LoginController');
  }));

  describe('checking user logging in and out', function () {
    it('should list of errors to be empty', function () {
      expect(LoginController.errors).toEqual([]);
    });
    it('should login be defined', function () {
      expect(LoginController.login).toBeDefined();
    });
    it('should logout be defined', function () {
      expect(LoginController.logout).toBeDefined();
    });
    it('should log in', function () {
      LoginController.login('admin@example.com', '123');
      scope.$digest();
      expect(LoginController.errors).toEqual([]);
      expect(UserService.user.email).toEqual('admin@example.com');
    });
    it('should not log in if no password was provided', function () {
      LoginController.login('admin@example.com');
      scope.$digest();
      expect(LoginController.errors.length).toBe(1);
      expect(UserService.user).toBe(undefined);
    });
    it('should logged out if logged in', function () {
      LoginController.login('admin@example.com', '123');
      scope.$digest();
      expect(UserService.user.email).toEqual('admin@example.com');
      LoginController.logout();
      expect(UserService.isAuthenticated).toBeFalsy();
      expect(UserService.user).toBe(undefined);
    });
  });
});
