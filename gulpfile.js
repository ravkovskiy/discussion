var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');

// SERVER
gulp.task('clean', function(){
    return del('dist')
});

gulp.task('build:server', function () {
	var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});


// CLIENT

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap/dist/css/bootstrap.css.map',
    'font-awesome/css/font-awesome.css',
    'font-awesome/fonts/fontawesome-webfont.woff2',
    'es6-shim/es6-shim.min.js',
    'es6-shim/es6-shim.map',
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system-polyfills.js.map',
    'jquery/dist/jquery.js',
    'bootstrap/dist/js/bootstrap.js',
    'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
    'mongoose/index.js',
    'mongoose/lib/index.js'

] 

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
     
    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'))
    return [copyJsNPMDependencies, copyIndex];
});


gulp.task('build:app', function(){
    var tsProject = ts.createProject('client/tsconfig.json');

    //Copy our .html,.js,.css etc. files from client in dist
    gulp.src('client/**/*[.html,.js,.css,.jpeg,.jpg]').pipe(gulp.dest('dist'));
    
    var tsResult = gulp.src('client/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});


gulp.task('build', function(callback){
    runSequence('clean', 'build:server', 'build:index', 'build:app', callback);
});

gulp.task('default', ['build']);