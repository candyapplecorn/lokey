// *** dependencies *** //

const path = require('path');
const gulp = require('gulp');
// const jshint = require('gulp-jshint');
// const jscs = require('gulp-jscs');
const runSequence = require('run-sequence');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const server = require('tiny-lr')();
const concatCss = require('gulp-concat-css');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');

// *** config *** //

const paths = {
  scripts: [
    path.join('src', '**', '*.js'),
    path.join('src', '*.js')
  ],
  styles: [
    path.join('src', 'client', 'css', '*.css'),
    path.join('..', 'app', 'assets', 'stylesheets')
  ],
  views: [
    path.join('src', 'server', '**', '*.html'),
    path.join('src', 'server', '*.html')
  ],
  server: path.join('src', 'server', 'server.js')
};

const lrPort = 35729;

const nodemonConfig = {
  script: paths.server,
  ext: 'html js css',
  ignore: ['node_modules'],
  env: {
    NODE_ENV: 'development'
  }
};

// *** default task *** //

gulp.task('default', () => {
  runSequence(
    // ['jshint'],
    // ['jscs'],
    ['lr'],
    ['nodemon'],
    ['watch'],
    ['styles'],
    ['moreStyles'],
    // ['cssAndScss']
  );
});

// *** sub tasks ** //

// gulp.task('jshint', () => {
//   return gulp.src(paths.scripts)
//     .pipe(plumber())
//     .pipe(jshint({
//       esnext: true
//     }))
//     .pipe(jshint.reporter('jshint-stylish'))
//     .pipe(jshint.reporter('fail'));
// });
//
// gulp.task('jscs', () => {
//   return gulp.src(paths.scripts)
//     .pipe(plumber())
//     .pipe(jscs())
//     .pipe(jscs.reporter())
//     .pipe(jscs.reporter('fail'));
// });

gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(plumber());
});

gulp.task('moreStyles', () =>
  gulp.src('../app/assets/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('src/client/css'))
)

gulp.task('views', () => {
  return gulp.src(paths.views)
    .pipe(plumber());
});

gulp.task('lr', () => {
  server.listen(lrPort, (err) => {
    if (err) {
      return console.error(err);
    }
  });
});

gulp.task('nodemon', () => {
  return nodemon(nodemonConfig);
});


gulp.task('cssAndScss', function() {
    var scssStream = gulp.src('../app/assets/**/*.scss')
        .pipe(sass())
        .pipe(concat('scss-files.scss'))
    ;

    var cssStream = gulp.src('../app/assets/**/*.css')
        .pipe(concat('css-files.css'))
    ;

    var mergedStream = merge(scssStream, cssStream)
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('src/client/css'));

    return mergedStream;
});


gulp.task('watch', () => {
  gulp.watch(paths.html, ['html']);
  // gulp.watch(paths.scripts, [/*'jshint',*/ /*'jscs'*/]);
  gulp.watch(paths.styles, ['styles']);
});
