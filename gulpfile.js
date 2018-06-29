const gulp = require('gulp');

gulp.task('copy-assets', (done) => {
    gulp.src('static/**/*.{png,json}')
        .pipe(gulp.dest('./build/default/static/'));

    gulp.src('bower_components/ace-builds/src-min-noconflict/{theme-monokai,mode-html}.js')
        .pipe(gulp.dest('./build/default/bower_components/ace-builds/src-min-noconflict/'));

    done();
});
