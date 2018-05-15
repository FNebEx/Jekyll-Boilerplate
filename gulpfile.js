const gulp = require('gulp');
const bs = require('browser-sync');
// const concat = require('gulp-concat');
// const cleanCss = require('gulp-clean-css');
const cp = require('child_process');
// Add imagemin

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

gulp.task('jekyll', function(done){
    return cp.spawn(jekyll, ['build', '--watch'])
        .on('close', done);
});

// gulp.task('css', function(){
//     return gulp.src('_src/_css_modules/*.css')
//         .pipe(concat('main.css'))
//         .pipe(cleanCss({compatibility: 'ie8'}))
//         .pipe(gulp.dest('_src/css'));
// });

gulp.task('server', function(){
    bs.init({
        server: {
            baseDir: './_dist'
        },
        files: '_dist',
        port: 9000
    });
});

gulp.task('watch', function(){
    gulp.watch("_src/**/*", ['jekyll']);
});

gulp.task('default', ['server', 'watch']);