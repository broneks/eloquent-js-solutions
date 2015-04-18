var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jshint  = require('gulp-jshint');

var jshintConfig = {
  strict    : true,
  unused    : true,
  eqeqeq    : true,
  lastsemic : true,
  newcap    : false,
  indent    : 2,
};

gulp.task('jshint', function() {
  gulp.src([
      './**/*.js',
      '!./**/*/project-*.js',
      '!./node_modules/**/*.js',
      '!./gulpfile.js'
    ])
    .pipe(plumber())
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'), {
      verbose: true
    });
});

gulp.task('default', function() {
  gulp.watch([
    './**/*.js',
    '!./**/*.project-*.js',
    '!./node_modules/**/*.js',
    '!./gulpfile.js'
  ], ['jshint']);
});