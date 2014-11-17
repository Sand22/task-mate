describe('UserService', function () {
  'use strict';

  var UserService,
    scope;

  MockFirebase.override();

  beforeEach(module('app.auth', function ($provide) {
    $provide.factory('$firebaseSimpleLogin', function ($q) {
      return function() {
        return {
          $getCurrentUser: function () {
            var dfd = $q.defer();
            dfd.resolve(null);
            return dfd.promise;
          }
        };
      };
    });
  }));

  describe('authenticating user', function () {
    it('should not be authenticated', function () {
      inject(function ($rootScope, _UserService_) {
        UserService = _UserService_;
        scope = $rootScope.$new();
      });
      expect(UserService.isAuthenticated).toBeFalsy();
    });

    it('should error be returned by getUser when not logged in', function () {
      UserService.getUser().catch(function (err) {
        expect(err).toEqual('Not authorized!');
      });
      scope.$digest();
    });
    it('should be authenticated if $getCurrentUser returns user', function () {
      module('app.auth', function ($provide) {
        $provide.factory('$firebaseSimpleLogin', function ($q) {
          return function() {
            return {
              $getCurrentUser: function () {
                var dfd = $q.defer();
                dfd.resolve({email: 'admin@example.com'});
                return dfd.promise;
              }
            };
          };
        });
      });
      inject(function ($rootScope, _UserService_) {
        UserService = _UserService_;
        scope = $rootScope.$new();
      });
      UserService.getUser();
      scope.$digest();
      expect(UserService.isAuthenticated).toBeTruthy();
    });
  });
});
