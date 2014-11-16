(function () {
  angular.module('app.common')
    .constant('FB_URL', 'https://taskmate.firebaseio.com')
    .factory('firebaseUtils', firebaseUtils);

  /* @ngInject */
  function firebaseUtils($window, FB_URL) {
    return {
      ref: new $window.Firebase(FB_URL)
    };
  }
})();
