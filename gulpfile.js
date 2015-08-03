var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var htmlInjector = require('bs-html-injector');
var flo = require('fb-flo');

gulp.task('build-css', function() {
  return gulp.src('src/style.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ 'bower_components' ]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('build-html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('build-js', function() {
  return gulp.src('src/**/*.es6')
    .pipe(sourcemaps.init())
    .pipe(babel({
      stage: 0
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', [ 'build' ], function() {
  browserSync.use(htmlInjector, {
    files: 'dist/*.html'
  });

  browserSync.init({
    server: {
      notify: false,
      baseDir: 'dist'
    },
    open: false
  });

  flo('dist', {
      port: 8888,
      host: 'localhost',
      glob: [
        '**/*.js'
      ]
    },
    function(filepath, callback) {
      callback({
        resourceURL: '/' + filepath,
        contents: require('fs').readFileSync('./dist/' + filepath).toString(),
        update: function(window, resourceURL) {
          // this function is executed in the browser
          init();
        }
      });
    })
});

gulp.task('watch', [ 'serve' ], function() {
  gulp.watch([ 'src/**/*.html' ], [ 'build-html' ]);
  gulp.watch([ 'src/**/*.es6' ], [ 'build-js' ]);
  gulp.watch([ 'src/**/*.less' ], [ 'build-css' ]);
});

gulp.task('build', [ 'build-js', 'build-css', 'build-html' ]);

gulp.task('default', [ 'watch' ]);
