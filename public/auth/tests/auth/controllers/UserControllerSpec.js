describe('UserController', function () {

  'use strict';

  var UserController;

  beforeEach(module('app.auth', function ($provide) {
    $provide.value('UserService', {isAuthenticated: false});
  }));
  beforeEach(inject(function ($controller) {
    UserController = $controller('UserController');
  }));

  describe('checking user authentication', function () {
    it('should isAuthenticated return false', function () {
      expect(UserController.isAuthenticated()).toBeFalsy();
    });
  });
});
