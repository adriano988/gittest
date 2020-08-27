var gulp= require('gulp');
var sass= require('gulp-sass');
const { task } = require('gulp');
var browserSync= require('browser-sync').create();

async function style(){
return gulp.src('app/scss/**/*.scss')
     .pipe(sass())
     .pipe(gulp.dest('app/css'))
     .pipe(browserSync.reload({
         stream:true
     }));
}

 async function watch(){
    browserSync.init({
        server:{
            baseDir:'app'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./**/*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style=style;
exports.watch=watch;
