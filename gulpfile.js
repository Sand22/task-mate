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
    testFiles = 'public/modules/**/tests/**/**/*.js',
    scripts = [
        'vendor/**/*.min.js',
        'public/app.js',
        'public/modules/**/**/*.js',
        '!public/modules/**/tests/**/**/*.js'
    ],
    serverSideScripts = [
        'server/server.js',
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

gulp.task('test', function() {
    'use strict';

    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});

gulp.task('uglify', function() {
    'use strict';

    gulp.src(scripts)
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('jshint', function () {
    'use strict';

    return gulp.src(scripts.slice(1,3).concat(serverSideScripts))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});