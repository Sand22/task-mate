module.exports = function (config) {
    'use strict';

    config.set({
        files : [
            'public/modules/**/tests/**/**/*.js'
        ],
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        autoWatch: false,
        singleRun: true,
        colors: true
    });
};