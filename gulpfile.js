//AleskiGulp Build System
var gulp 				= require('gulp');
var	uglify 			= require('gulp-uglify');
var concat 			= require('gulp-concat');
var	sass 				= require('gulp-sass');
var concatCss 	= require('gulp-concat-css');
var	jshint 			= require('gulp-jshint');
var	jsreporter 	= require('jshint-stylish');
var	express 		= require('express');
var tinylr 			= require('tiny-lr')();

function notifyLiveReload(event) {
	var fileName = require('path').relative(__dirname, event.path);
	tinylr.changed({
		body: {
			files: [fileName]
		}
	});
}

//Move the Index file
gulp.task('move-index', function () {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./build/'));
});

//Create compressed JS
gulp.task('compress', function() {
	return gulp.src('./src/**/*.js')
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./build/'));
});

//Compile Sass
gulp.task('sass', function () {
	return gulp.src('./src/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(concatCss("styles.css"))
		.pipe(gulp.dest('./build/css/'));
});

//Lint the JS
gulp.task('lint', function() {
	return gulp.src('./src/*/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(jsreporter));
});

//Start the Express Server
gulp.task('express', function() {
	var app = express();
	app.use(require('connect-livereload')({port: 35729}));
	app.use(express.static(__dirname + '/build'));
	app.listen(4000, '0.0.0.0');
});

//Livereload
gulp.task('livereload', function() {
	tinylr.listen(35729);
});

//Watchers
gulp.task('watch', function() {
	//Watch for a sass change to recompile
	gulp.watch('./src/**/*.sass', ['sass']);

	//Watch for a JS change to re-concatenate
	gulp.watch('./src/**/*.js', ['compress'])

	//Watch for index.html changes
	gulp.watch('./src/index.html', ['move-index']);

	//Watch the build folder to refresh the express server
	gulp.watch('./build/**/*.css', notifyLiveReload);
	gulp.watch('./build/**/*.js', notifyLiveReload);
	gulp.watch('./build/**/*.html', notifyLiveReload);
});

//Default tasks performed each save
gulp.task('default', ['move-index', 'compress', 'sass', 'lint', 'express', 'livereload', 'watch'], function() {});