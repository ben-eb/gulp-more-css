/* global describe, it */

'use strict';

var expect = require('chai').expect,
    Stream = require('stream'),
    gutil  = require('gulp-util'),
    more   = require('./'),
    path   = require('path'),
    fs     = require('fs');

function loadFixture (fixture) {
    var cssFile = path.join('./fixtures', fixture) + '.css';
    return fs.readFileSync(cssFile, 'utf-8').replace('\n', '');
}

var inFile  = loadFixture('in');
var outFile = loadFixture('out');

describe(require('./package.json').name, function () {
    it('should compress css files', function (cb) {
        var stream = more();

        stream.on('data', function (data) {
            expect(String(data.contents)).to.equal(outFile);
            cb();
        });

        stream.write(new gutil.File({
            contents: new Buffer(inFile)
        }));
    });

    it('should let null files pass through', function (cb) {
        var stream = more();

        stream.on('data', function (data) {
            expect(data.contents).to.equal(null);
            cb();
        });

        stream.write(new gutil.File({
            contents: null
        }));
    });

    it('in stream mode should throw an error', function (cb) {
        var stream = more();

        var fakeFile = new gutil.File({
            contents: new Stream()
        });

        var doWrite = function () {
            stream.write(fakeFile);
            fakeFile.contents.write(inFile);
            fakeFile.contents.end();
        };

        expect(doWrite).to.throw(/Streaming not supported/);
        cb();
    });
});
