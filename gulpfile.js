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
var gulp = require('gulp');

// Gulp Specific Dependencies
var jsonConcat = require('gulp-json-concat');


var demoUrl = "https://app.atmosphereiot.com/demos/";
    
var projectTypes = ["bcm20737", "bcm43364", "intelCurie"];

var versions = ["1.5.0", "1.5.1", "2.0.0", "2.0.1", "2.0.2"];

// Production alldemos.json - cleanses the output based on projectTypes and versions defined above.
gulp.task('prod', function() {
    
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
                        url: demoUrl + d +".atmo"
                    });
                
                }
                
            }
            
            return new Buffer(JSON.stringify(newData));
            
        }))
        .pipe(gulp.dest('./'));
    
});


// Development devdemos.json - useful for viewing out of date versions and projectTypes that need to be updated
gulp.task('dev', function() {
    
    return gulp.src('**/official/*.atmo')
        .pipe(jsonConcat('devdemos.json', function(data){
            
            var newData = [];
            
            for (d in data) {                           
                newData.push({version: data[d].header.meta.version,
                    description: data[d].header.meta.description,
                    projectType: data[d].header.meta.projectType,
                    name: data[d].header.meta.name,
                    url: demoUrl + d +".atmo"
                }); 
            }
            
            return new Buffer(JSON.stringify(newData));
            
        }))
        .pipe(gulp.dest('./'));
    
});

// The default tasks is scripts, so run scripts clean, which then runs scripts
gulp.task('default', ['prod', 'dev']);