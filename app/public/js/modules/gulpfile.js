const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const nodeSass = require('node-sass')
const sass = gulpSass(nodeSass);
const browserSync = require('browser-sync').create();

function style(){
    return gulp.src('../../scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../../css'))
        .pipe(browserSync.stream());
}

function watch(){
    gulp.watch('../../scss/**/*.scss', style)
}

exports.style = style;
exports.watch = watch;