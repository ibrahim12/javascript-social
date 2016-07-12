var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var complexity = require('gulp-complexity');
var header = require('gulp-header');
var pkg = require('./package.json');

var banner = ['/**',
  ' * Javascript Social <%= pkg.version %>',
  ' * (c) 2016 <%= pkg.author.name %>',
  ' * License: <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('minify', function() {
  return gulp.src('dist/javascript.social.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/'));
});

// gulp.task('copy', ['minify'], function() {
//   return gulp.src('dist/javascript.social.js')
//     .pipe(gulp.dest('examples/client/vendor'))
//     .pipe(gulp.dest('examples/ionic/www/lib'));
// });

// gulp.task('php', function() {
//   return gulp.src('examples/client/**/*.*')
//     .pipe(gulp.dest('examples/server/php/public'));
// });

gulp.task('complexity', function() {
  return gulp.src('dist/javascript.social.js')
    .pipe(complexity());
});

gulp.task('watch', function() {
  gulp.watch('dist/javascript.social.js', ['minify']);
});

gulp.task('default', ['watch']);
