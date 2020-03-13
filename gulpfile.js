var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var html = require('gulp-htmlmin');

//
gulp.task('html', function(){
    return gulp.src('src/index.html')
    .pipe(html({collapseWhitespace:true}))
    .pipe(gulp.dest('/dist/'));
})


//compila e transforma o scss em css
gulp.task('compilar-sass', function(){
    return gulp.src(['*.scss','src/sass/*.scss'])
    .pipe(sass().on('error', function(erro){
        console.log(erro);
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/css'))
});

//monitora as atualizações do arquivo scss
gulp.task('monitorar', function(){
    gulp.watch(['*.scss','src/sass/*.scss'], gulp.series('compilar-sass'));
});

gulp.task('default', gulp.series('monitorar'));