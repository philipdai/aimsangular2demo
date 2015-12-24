'use strict';

var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var concatCss = require('gulp-concat-css');
var debug = require('gulp-debug');
var del = require('del');
var eslint = require('gulp-eslint');
var filter = require('gulp-filter');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var karma = require('karma').server;
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var ngAnnotate = require('gulp-ng-annotate');
var partialify = require('partialify');
var pipe = require('multipipe');
var plumber = require('gulp-plumber');
var proxyMiddleware = require('http-proxy-middleware');
var rename = require('gulp-rename');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var series = require('stream-series');
var size = require('gulp-size');
var stripDebug = require('gulp-strip-debug');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var watchify = require('watchify');
var zip = require('gulp-zip');
var gls = require('gulp-live-server');


// Helpers:

function bundleScripts(devMode) {
  var bundler = browserify('./app/app.js', {
      debug: devMode,
      bundleExternal: false
    })
    .transform(partialify)
    .transform(babelify.configure({ignore: 'bower_components'}));

  function rebundle() {
    return bundler.bundle()
      .on('error', function(error) {
        gutil.log(gutil.colors.red(error));
        this.emit('end');
      })
      .on('log', gutil.log)
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulpif(!devMode, rev()))
      .pipe(sourcemaps.init({loadMaps: true}))
//        .pipe(uglify())
//        .on('error', gutil.log)
//        .pipe(ngAnnotate({single_quotes: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js/app'))
      .pipe(gulpif(devMode, browserSync.stream({once: true})))
      .pipe(size());
  }

  if (devMode) bundler = watchify(bundler).on('update', rebundle);

  return rebundle();
}

// Tasks:


// Backend mockup server
gulp.task('server', function() {
  var server = gls.new('server.js', undefined, false);
  server.start();
});

gulp.task('build-dependencies', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    debug: true
  });

  // b.require('angular');
  // b.require('angular-ui-router');
  b.require('angular2/bundles/angular2');
  b.require('lodash');

  return b.bundle()
    .pipe(source('dependencies-bundle.js'))
    .pipe(buffer())
    .pipe(rev())
    .pipe(sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/vendor'))
    .pipe(size());
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: ['dist'],
      middleware: []
    },
    port: 8080,
    ghostMode: false
  });

  gulp.watch('dist/index.html').on('change', browserSync.reload);
});

gulp.task('clean', function(cb) {
  del(['.tmp', 'dist', 'dist.zip'], cb);
});

gulp.task('zip:build', function() {
  return gulp.src('dist/**/*')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('.'));
});

gulp.task('html', ['css', 'sass'], function() {
  var vendorStream = gulp.src(['./dist/js/vendor/*.js'], {read: false});
  var appStream = gulp.src(['./dist/js/app/*.js'], {read: false});
  var sources = series(vendorStream, appStream);

  return gulp.src('app/index.html')
    .pipe(inject(gulp.src('dist/styles/**/*.css'), { ignorePath: 'dist' }))
    .pipe(inject(sources, { ignorePath: 'dist' }))
    // .pipe(minifyHtml({ quotes: true }))
    .pipe(gulp.dest('dist'))
    .pipe(size());
});

gulp.task('ng-templates', function() {
  return gulp.src('app/**/*.tmpl.html')
    .pipe(minifyHtml({ quotes: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint-js', function() {
  return gulp.src('app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(size());
});

gulp.task('scripts', function() {
  return bundleScripts(true);
});

gulp.task('scripts:build', function() {
  return bundleScripts(false);
});

gulp.task('css', function() {
  return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css',
    'bower_components/bootstrap-additions/dist/css/bootstrap-additions.css',
    'styles/main.css'])
    .pipe(concatCss('bundle.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('sass', function() {
  return gulp.src('styles/**/*.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
      // Add transformation tasks to the pipeline here.
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('serve', ['server'], function(cb) {
  runSequence('clean', ['build-dependencies', 'scripts', 'ng-templates'], 'html', 'watch', 'browser-sync', cb);
});

gulp.task('build', function(cb) {
  runSequence('clean', ['build-dependencies', 'scripts:build', 'ng-templates'], 'html', 'zip:build', cb);
});

gulp.task('test', function(cb) {
  karma.start({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true,
    autoWatch: false,
    reporters: ['dots']
  }, cb);
});

gulp.task('test:tdd', function(cb) {
  karma.start({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: false,
    autoWatch: true,
    reporters: ['dots']
  }, cb);
});

gulp.task('watch', function() {
  //gulp.watch('app/**/*.js', ['lint-js']);
  gulp.watch(['app/index.html', 'styles/**/*.scss'], ['html']);
  gulp.watch('app/**/*.tmpl.html', ['ng-templates']);

  gulp.watch(['dist/**/*.tmpl.html', 'dist/**/*.css']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
