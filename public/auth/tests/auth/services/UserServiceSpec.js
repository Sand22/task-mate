describe('UserService', function () {
  'use strict';

  var UserService,
    isAuthenticated;

  beforeEach(module('app'));
  beforeEach(inject(function ($timeout, _UserService_) {
    UserService = _UserService_;
    spyOn(UserService, 'isAuthenticated').and.callThrough();
    UserService.isAuthenticated().then(function () {
      isAuthenticated = true;
    }, function () {
      isAuthenticated = false;
    });
    $timeout.flush();
  }));

  describe('authenticating user', function () {
    it('should not be authenticated', function () {
      UserService.isAuthenticated();
      expect(isAuthenticated).toBeFalsy();
    });
  });
});
