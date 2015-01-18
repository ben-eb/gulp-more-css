'use strict';

var more        = require('more-css'),
    gutil       = require('gulp-util'),
    transform   = require('stream').Transform,

    PLUGIN_NAME = 'gulp-more-css';

module.exports = function(options) {
    var stream = new transform({ objectMode: true });

    options = options || {};

    if (typeof options.radical === 'undefined') {
        options.radical = true;
    }

    stream._transform = function(file, unused, done) {
        if (file.isStream()) {
            return done(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
        } else if (file.isBuffer()) {
            file.contents = new Buffer(more.compress(String(file.contents), options.radical));
            done(null, file);
        } else {
            // Pass through when null
            done(null, file);
        }
    };

    return stream;
};
