var gulp = require('gulp'),
    sass = require('gulp-sass'),
    karma = require('gulp-karma'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    compressor = require('gulp-compressor'),
    testFiles = 'app/modules/**/**/tests/*.js',
    scripts = [
        'app/vendor/**/*.min.js',
        'app/modules/**/*.js',
        'app/modules/**/**/*.js',
        '!app/modules/**/**/tests/*.js'
    ],
    sassFiles = 'app/modules/**/public/assets/css/*.scss';

gulp.task('sass', function () {
    "use strict";

    gulp.src(sassFiles)
        .pipe(sass({
            sourceMap: 'sass',
            sourceComments: 'map'
        }))
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(compressor())
        .pipe(gulp.dest('app/build'));
});

gulp.task('test', function() {
    "use strict";

    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});

gulp.task('uglify', function() {
    "use strict";

    gulp.src(scripts)
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest('app/build'));
});