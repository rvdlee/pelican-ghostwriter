'use strict';

// Author: Rob van der Lee

// Gulp requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// CSS minifier
gulp.task('cssmin', function () {
    gulp.src(['./static/css'])
        .pipe(cssmin())
        .pipe(gulp.dest('./static/css'));
});

// Sass Compiler
gulp.task('sass', function (){
    gulp.src(['./sass/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./static/css'));
});

// Watch files
gulp.task('watch', function () {
    gulp.watch(['./sass/*.scss','./sass/*/*.scss'], ['sass', 'cssmin']);
});
