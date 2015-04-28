var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyHTML = require('gulp-minify-html');
 
// HTML Task
gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('./assets/html/**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/html'));
});

// Sass Task
gulp.task('sass', function () {
  gulp.src('./assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

// Development Task
gulp.task('development', ['html', 'sass'], function() {
  gulp.watch('./assets/html/**/*.html', ['html']);
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});