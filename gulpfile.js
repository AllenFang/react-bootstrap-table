var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require("vinyl-source-stream");
var babel = require('gulp-babel');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var del = require('del');
var shell = require('gulp-shell');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
// webpack config to build and serve examples
var exampleConfig = require('./webpack.example.config');
// webpack config to build umd bundle
var umdConfig = require('./webpack.umd.config');

var watching = false;
var demo = false;


gulp.task('default', ['prod']);

gulp.task('clean', function() {
  return del([
    './dist/*',
    './lib/**'
  ]);
});

//------------
// PROD
// -----------
gulp.task('prod', ['umdBuild'], function() {
  // - Use gulp-babel to transpile each file for ppl who use webpack/browserify
  // - This will be the package.json entry point
  // - Most of the ppl will use this, and should use their own source maps when bundling,
  // as well as uglify in production.
  // - This is the way React itself distributes their package,
  // as well as other libraries like react-boostrap
  gulp.src(['./src/**/*.js', './src/*js'])
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
  // build the css
  gulp.src('./css/react-bootstrap-table.css')
    .pipe(concatCss("./react-bootstrap-table.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist'));
  gulp.src(['./css/react-bootstrap-table.css',
    './node_modules/react-s-alert/dist/s-alert-default.css',
    './node_modules/react-s-alert/dist/s-alert-css-effects/scale.css'])
    .pipe(concatCss('./react-bootstrap-table-all.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist'));
});

// build umd bundles for https://npmcdn.com/ and for browser <script> tag
gulp.task('umdBuild', ['clean'], shell.task([
  'webpack --config webpack.umd.config.js',
  'webpack --config webpack.umd.min.config.js'
]));

//------------
// EXAMPLES
// -----------
gulp.task('example-server', function() {

  new WebpackDevServer(webpack(exampleConfig), {
    publicPath: exampleConfig.serverConfig.publicPath,
    contentBase: exampleConfig.serverConfig.contentBase,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: true,
      chunkModules: false
    },
    historyApiFallback: true
  }).listen(exampleConfig.serverConfig.port, 'localhost', function(err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3004');
  });

});

// TODO: consider dropping browserify and just use webpack
//------------
// DEMO
// -----------
// gulp.task("dev", function() {
//   watching = true;
//   buildDemoCode();
// });

// function buildDemoCode() {
//   demo = true;
//   browserifing("./demo/js/demo.js", "demo.bundle.js", "./demo/js");
// }

// function browserifing(main, bundleName, dest) {
//   var b = browserify({
//     entries: [main],
//     transform: ["babelify"],
//     cache: {},
//     debug: true,
//     packageCache: {},
//     fullPaths: true,
//   });
//
//   if (demo)
//     b = b.require(require.resolve('./src/index.js'), {
//       expose: 'react-bootstrap-table'
//     });
//
//   if (watching) {
//     b = watchify(b);
//     b.on('update', function() {
//       bundle(b, bundleName, dest);
//     });
//   }
//   bundle(b, bundleName, dest);
// }

// function bundle(b, bundleName, dest) {
//   b.bundle()
//     .on('error', function(err) {
//       console.log(err.message);
//     })
//     .on('end', function() {
//       console.log("building success.");
//     })
//     .pipe(source(bundleName))
//     .pipe(gulp.dest(dest));
// }
