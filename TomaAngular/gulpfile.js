/// <binding BeforeBuild='js-vendors-build-scripts, js-app-build-scripts, css-vendorAndApp-build-styles' />
// include plug-ins
var gulp = require('gulp');
var modifyCssUrl = require('gulp-modify-css-urls');
var base64 = require('gulp-base64');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('js-vendors-build-scripts', function () {
    var scripts = [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.js'
    ];

    return gulp.src(scripts)
        .pipe(concat('vendors-built.js'))
        .pipe(gulp.dest('webappRoot'));
});

gulp.task('js-app-build-scripts', function () {
    var scripts = [
        'webappRoot/app.js',
        'webappRoot/route.js',
        'webappRoot/controllers/home/home.controller.js'
    ];

    return gulp.src(scripts)
        .pipe(concat('app-built.js'))
        .pipe(gulp.dest('webappRoot'));
});

gulp.task('css-vendorAndApp-build-styles', function () {
    var styles = [
        'content/styles/app.css',
        'bower_components/bootstrap/dist/css/bootstrap.css'
    ];

    return gulp.src(styles)
        .pipe(modifyCssUrl({
            modify: function (url, filePath) {
                var removeQueryString = function (p) {
                    var pArr = p.split("?");

                    return pArr[0];
                };
                var removeHashString = function (p) {
                    var pArr = p.split("#");

                    return pArr[0];
                };

                var actualPath = url;

                actualPath = removeQueryString(actualPath);
                actualPath = removeHashString(actualPath);

                return actualPath;
            }
        }))
        .pipe(base64({
            debug: true,
            maxImageSize: 10000 * 1024
        }))
        .pipe(concat('vendorAndApp.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('webappRoot'));
});

//delete the output file(s)
gulp.task('clean', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['webappRoot/vendors-built.js', 'webappRoot/vendorAndApp.min.css', 'webappRoot/app-built.js']);
});