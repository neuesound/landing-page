var gulp   = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('css', function () {
  gulp.src('dist/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('dist/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

// Production Task
gulp.task('production', ['css', 'js'], function() {
});