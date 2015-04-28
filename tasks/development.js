var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyHTML = require('gulp-minify-html');
var concat     = require('gulp-concat');
 
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


// Javascrip Task
gulp.task('javascript', function() {
  return gulp.src(['./assets/js/particles.js', './assets/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

// Development Task
gulp.task('development', ['html', 'sass', 'javascript'], function() {
  gulp.watch('./assets/html/**/*.html', ['html']);
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['javascript']);
});