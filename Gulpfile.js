const gulp = require('gulp'),
    util = require('gulp-util'),
    gulpProtractorAngular = require('gulp-angular-protractor');

gulp.task('default', (callback) => {
    util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = 'chrome';
    gulp
        .src(['scenarios/*'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});

gulp.task('protractor-multi', (callback) => {
    gulp
        .src(['scenarios/*'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf.mult.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', callback);
});
