var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require("vinyl-source-stream");
var babel = require('gulp-babel');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var webpack = require('webpack');

var watching = false;
var demo = false;


gulp.task("default", ["prod"]);

gulp.task("prod", function () {
  // Don't use babel to build each library
  // gulp.src('./src/**/*.js')
  //   .pipe(babel())
  //   .pipe(gulp.dest('./lib'));
  gulp.src('./css/react-bootstrap-table.css')
    .pipe(concatCss("./react-bootstrap-table.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest('./css'));
  gulp.src(['./css/react-bootstrap-table-all.css', './css/toastr.css'])
    .pipe(concatCss("./react-bootstrap-table-all.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest('./css'));
  buildProdDist();
});

gulp.task("dev", function () {
  watching = true;
  buildDemoCode();
  // buildProdDist();
});

function buildDemoCode() {
  demo = true;
  browserifing("./demo/js/demo.js", "demo.bundle.js", "./demo/js");
}

function buildProdDist() {
  // Give up the browserify to build product, cause of #131, change to webpack instead
  // demo = false;
  // browserifing("./src/index.js", "react-bootstrap-table.min.js", "./dist");
  var config = require("./webpack.production.config");
  var compiler = webpack(config);

  compiler.run(function(err, stats) {
      if(null != err)
        console.error(err);
      else
        console.log("building success");
  });
}

function browserifing(main, bundleName, dest) {
  var b = browserify({
    entries: [main],
    transform: ["babelify"],
    cache: {},
    debug: true,
    packageCache: {},
    fullPaths: true,
  });

  if (demo)
    b = b.require(require.resolve('./src/index.js'),
      {expose: 'react-bootstrap-table'});

  if (watching) {
    b = watchify(b);
    b.on('update', function () {
      bundle(b, bundleName, dest);
    });
  }
  bundle(b, bundleName, dest);
}

function bundle(b, bundleName, dest) {
  b.bundle()
    .on('error', function (err) {
      console.log(err.message);
    })
    .on('end', function () {
      console.log("building success.");
    })
    .pipe(source(bundleName))
    .pipe(gulp.dest(dest));
}

// Static server
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.example.config');


gulp.task('example-server', function () {

  new WebpackDevServer(webpack(config), {
    publicPath: config.serverConfig.publicPath,
    contentBase: config.serverConfig.contentBase,
    hot: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true
  }).listen(config.serverConfig.port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3004');
  });

});
