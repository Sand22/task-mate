var gulp = require('gulp'),
  sass = require('gulp-sass'),
  karma = require('gulp-karma'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  prefix = require('gulp-autoprefixer'),
  compressor = require('gulp-compressor'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  rename = require('gulp-rename'),
  ngAnnotate = require('gulp-ng-annotate'),
  testFiles = [
    'public/vendor/angular/angular.js',
    'public/vendor/angular-mocks/angular-mocks.js',
    'public/vendor/angular-route/angular-route.js',
    'public/vendor/mockfirebase/dist/mockfirebase.js',
    'public/vendor/angularfire/dist/angularfire.min.js',
    'public/vendor/lodash/dist/lodash.min.js',
    'public/*.js',
    'public/!(vendor)/**/*.js',
    'public/**/tests/**/**/*.js'
  ],
  scripts = [
    'public/vendor/!(angular-mocks)/*.min.js',
    'public/vendor/firebase/firebase.js',
    'public/vendor/firebase-simple-login/firebase-simple-login.js',
    'public/vendor/angularfire/dist/angularfire.min.js',
    'public/*.js',
    'public/!(vendor)/**/*.js',
    '!public/**/tests/**/**/*.js'
  ]
  serverSideScripts = [
    'server.js',
    'server/**/*.js'
  ],
  sassFiles = 'public/assets/stylesheets/*.scss';

gulp.task('sass', function () {
  'use strict';

  gulp.src(sassFiles)
    .pipe(sass({
      sourceMap: 'sass',
      sourceComments: 'map'
    }))
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .pipe(compressor())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('public/assets/stylesheets/build'));
});

gulp.task('test', function () {
  'use strict';

  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
});

gulp.task('uglify', function () {
  'use strict';

  gulp.src(scripts)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('jshint', function () {
  'use strict';

  return gulp.src(scripts.slice(1, 3).concat(serverSideScripts))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
