var gulp       = require('gulp');
var browserify = require('browserify');
var watchify   = require('watchify');
var source 		 = require("vinyl-source-stream");
var babel      = require('gulp-babel');
var cssmin     = require('gulp-cssmin');
var rename     = require('gulp-rename');

var watching = false;
var demo     = false;


gulp.task("default", ["prod"]);

gulp.task("prod", function(){
	gulp.src('./src/*.js')
			.pipe(babel())
			.pipe(gulp.dest('./lib'));
	gulp.src('./css/react-bootstrap-table.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
	buildProdDist();
});

gulp.task("dev", function(){
	watching = true;
	buildDemoCode();
	// buildProdDist();
});

function buildDemoCode(){
	demo = true;
	browserifing("./example/js/demo.js", "demo.bundle.js", "./example/js");
}

function buildProdDist(){
	demo = false;
	browserifing("./src/index.js", "react-bootstrap-table.min.js", "./dist");
}

function browserifing(main, bundleName, dest){
	var b = browserify({
	    entries: [main],
			transform: ["babelify"],
			cache: {},
			debug: true,
			packageCache: {},
			fullPaths: true,
	});

	if(demo)
		b = b.require(require.resolve('./src/index.js'),
				{ expose: 'react-bootstrap-table' });

	if(watching){
		b = watchify(b);
		b.on('update', function(){
			bundle(b, bundleName, dest);
		});
	}
	bundle(b, bundleName, dest);
}

function bundle(b, bundleName, dest){
	b.bundle()
	.on('error', function(err){
		console.log(err.message);
		this.end();
  })
	.on('end', function(){
		console.log("building success.");
		this.end();
	})
	.pipe(source(bundleName))
	.pipe(gulp.dest(dest));
}
