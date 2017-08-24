const chain = require('gulp-chain');
const chalk = require('chalk');
const doctoc = require('gulp-doctoc');
const fs = require('fs');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const handlebars = require('gulp-compile-handlebars');
const path = require('path');
const through = require('through2');
const util = require('gulp-util');
const watch = require('gulp-watch');

const root = __dirname;
const srcDir = 'src';
const markdownFiles = [ '**/*.md', '!**/*.partial.md' ];

const templateData = require('./data');
const handlebarsOptions = {
  helpers: {
    partial: function(name) {
      return fs.readFileSync(`src/${name}.partial.md`, { encoding: 'utf8' }).replace(/\n\s*$/m, '');
    }
  }
};

gulp.task('build', function() {
  return gulp
    .src(markdownFiles, { cwd: srcDir })
    .pipe(compile());
});

gulp.task('watch', function() {
  return watch(markdownFiles, { cwd: srcDir }, function(file) {
    return gulp
      .src(file.path, { base: srcDir })
      .pipe(compile());
  });
});

gulp.task('default', [ 'build' ]);

const compile = chain(function(stream) {
  return stream
    .pipe(handlebars(templateData, handlebarsOptions))
    .pipe(gulpIf('!README.md', doctoc({
      mode: 'github.com',
      notitle: true
    })))
    .pipe(log)
    .pipe(gulp.dest(root))
});

const log = through.obj(function(file, enc, callback) {
  this.push(file);

  const relativePath = path.relative(file.base, file.path);
  util.log(chalk.yellow(`${srcDir}/${relativePath} -> ${relativePath}`));

  callback();
});
