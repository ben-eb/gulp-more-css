# [gulp](https://github.com/gulpjs/gulp)-more-css [![Build Status](https://travis-ci.org/ben-eb/gulp-more-css.svg?branch=master)](https://travis-ci.org/ben-eb/gulp-more-css) [![NPM version](https://badge.fury.io/js/gulp-more-css.svg)](http://badge.fury.io/js/gulp-more-css) [![Dependency Status](https://gemnasium.com/ben-eb/gulp-more-css.svg)](https://gemnasium.com/ben-eb/gulp-more-css)

> Minify CSS using [more-css](https://github.com/army8735/more) & gulp.

*If you have any difficulties with the output of this plugin, please use the [more-css tracker](https://github.com/army8735/more/issues).*

Install via [npm](https://npmjs.org/package/gulp-more-css):

```
npm install gulp-more-css --save-dev
```

## Example

```js
var gulp = require('gulp');
var moreCSS = require('gulp-more-css');

gulp.task('default', function() {
    return gulp.src('./main.css')
        .pipe(moreCSS())
        .pipe(gulp.dest('./out'));
});
```

## Options

### radical
Type: `Boolean`

Apply further minimization. Defaults to `true`.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests to cover it.

## License

MIT © Ben Briggs
