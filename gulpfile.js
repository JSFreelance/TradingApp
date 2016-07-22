// Dependencies

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

//Default task: concat and uglify angular.js controllers
gulp.task('default', function () {
    gulp.src('public/scripts/controllers/*.js')
        .pipe(concat('buildCtrl.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/scripts/controllers/build/'))
});