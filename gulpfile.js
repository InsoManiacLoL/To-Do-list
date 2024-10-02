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
  // Unit tests
  gulp.src('tests/unit/*.js')
    .pipe(mocha({reporter: 'spec'}));

  // Integration tests
  gulp.src('tests/integration/*.js')
    .pipe(mocha({reporter: 'spec'}));

  // End-to-end tests (e.g., using Cypress)
  gulp.src('tests/e2e/*.js')
    .pipe(cypress.run());
});

gulp.task('deploy', () => {
  // Deploy to GitHub Pages
  gulp.src('./dist/**/*')
    .pipe(ghPages());

  // Deploy to AWS S3
  gulp.src('./dist/**/*')
    .pipe(awspublish({
      region: 'your-region',
      bucket: 'your-bucket',
    }));

  // Deploy to FTP server
  gulp.src('./dist/**/*')
    .pipe(ftp({
      host: 'your-host',
      user: 'your-username',
      pass: 'your-password',
    }));
});
