var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
})
// 监听文件更新
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
})
// 页面自动刷新
var browserSync = require('browser-sync')
gulp.task('server',function(){
    // 创建一个静态服务器
    browserSync({
        server:'./src',
        port:3828,
        files:['./src/**/*.html','./src/css/*.css']
    })
    gulp.watch('./src/sass/*.scss',['compileSass'])
})