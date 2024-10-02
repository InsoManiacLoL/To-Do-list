const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('build', () => {
    return gulp.src(['script.js'])
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', () => {
    // Add your test commands here
});

gulp.task('deploy', () => {
    // Add your deployment commands here
});
