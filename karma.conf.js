module.exports = function (config) {
  'use strict';

  config.set({
    files: [
      'public/vendor/angular/angular.js',
      'public/vendor/angular-mocks/angular-mocks.js',
      'public/vendor/angular-route/angular-route.js',
      'public/*.js',
      'public/!(vendor)/**/*.js'
    ],
    basePath: '',
    preprocessors: {
      'public/app.js': ['coverage'],
      'public/!(vendor)/!(tests)/*.js': ['coverage']
    },
    reporters: ['coverage', 'mocha'],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
