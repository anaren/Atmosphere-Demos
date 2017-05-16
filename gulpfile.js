/*
 * Atmosphere Demos Gulpfile
 * 
 * Description: Build atmosphere demos for endpoint apps with gulp on node.js 
 * 
 * gulp (runs the default gulp)
 * 
 * 
 */ 


// Vanilla Node Dependencies
var del = require('del');
var fs = require('fs');
var merge = require('merge');
var path = require('path');
var gulp = require('gulp');


// Gulp Specific Dependencies
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var zip = require('gulp-zip');
var jsonConcat = require('gulp-json-concat');


// A general task object to make things cleaner
var task = {}; 

var demoUrl = "https://atmosphere.anaren.com/demos/"
    
var projectTypes = ["bcm20737", "bcm43364", "intelCurie"];

var versions = ["1.5.0", "1.5.1", "2.0.0", "2.0.1", "2.0.2"];

// Function to retrieve folders - something like this might work
function getFolders(dir) {
	return fs.readdirSync(dir)
	.filter(function(file) {
		return fs.statSync(path.join(dir, file)).isDirectory();
	});
}


// Get the */offical/*.atmo files and load up sufficient data for a demos.json file to serve the IDE
gulp.task('compile', function() {
    

    return gulp.src('**/official/*.atmo')
        .pipe(jsonConcat('alldemos.json', function(data){
            
            var newData = [];
            
            for (d in data) {
                
                // ignore invalid project types and old our non pub versions
                if ((projectTypes.indexOf(data[d].header.meta.projectType) > -1) && (versions.indexOf(data[d].header.meta.version) > -1)) {
                    
                    newData.push({version: data[d].header.meta.version,
                        description: data[d].header.meta.description,
                        projectType: data[d].header.meta.projectType,
                        name: data[d].header.meta.name,
                        url: demoUrl + data[d].header.meta.projectType + "/official/" + d+".atmo"
                    });
                
                }
                
            }
            
            return new Buffer(JSON.stringify(newData));
            
        }))
        .pipe(gulp.dest('./'));
    
});


//TODO: create a gulp script to recurse the the */offical/*.atmo files and load up sufficient data for a demos.json file to serve the IDE
gulp.task('build', function() {
    
    var allDemos = require('./build/alldemos.json');
    
    var res = [];
    
    
    for (d in allDemos) {
        
        
        
    }
    
    
    
    return gulp.src('**/official/*.atmo')
        .pipe(concat('alldemos.json'))
        .pipe(gulp.dest('./build')); 
    
});



// The default tasks is scripts, so run scripts clean, which then runs scripts
gulp.task('default', ['compile']);