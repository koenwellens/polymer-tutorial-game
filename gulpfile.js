const gulp = require('gulp');

gulp.task('copy-assets', (done) => {
    gulp.src('static/**/*.png')
        .pipe(gulp.dest('./build/default/static/'));
    done();
});
