describe('UserService', function () {
  'use strict';

  var AuthService;

  beforeEach(module('app.auth'));
  beforeEach(inject(function (_AuthService_) {
    AuthService = _AuthService_;
  }));

  describe('authenticating user', function () {
    it('should login be defined', function () {
      expect(AuthService.login).toBeDefined();
    });
    it('shoould logout be defined', function () {
      expect(AuthService.logout).toBeDefined();
    });
  });
});
