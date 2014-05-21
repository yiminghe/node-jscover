#!/usr/bin/env node

/**
 * cli tools
 * @author yiminghe@gmail.com
 */

var program = require('commander');
var walk = require('walk');
var jscover = require('../lib/jscover');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var ncp = require('ncp').ncp;

program
    .option('-d, --dir <dir>', 'source file dir')
    .option('-o, --out <out>', 'instrumented file dir')
    .option('-f, --front', 'whether generate front-end')
    .parse(process.argv);

function normalizeSlash(str) {
    return str.replace(/\\/g, '/');
}

function run(program) {
    var dir = program.dir,
        out = program.out,
        front = program.front;

    //noinspection JSUnresolvedFunction
    var walker = walk.walk(dir);
    walker.on('file', function (root, fileStats, next) {
        if (path.extname(fileStats.name) !== '.js') {
            return;
        }
        var filePath = path.join(root, fileStats.name);
        var subPath = filePath.substring(dir.length);
        var destPath = out + subPath;
        var code = fs.readFileSync(filePath, {
            encoding: 'utf-8'
        });
        var instrumentedCode = jscover.instrument(code, normalizeSlash(subPath));

        mkdirp.sync(path.dirname(destPath));

        fs.writeFileSync(destPath, instrumentedCode, {
            encoding: 'utf-8'
        });
        if (!program.silent) {
            console.log('generate instrumented file: ' + destPath + ' for ' + filePath);
        }
        next();
    });

    if (front) {
        ncp(path.join(__dirname, '../lib/front-end'), out);
    }
}

exports.run = run;

if (require.main === module) {
    run(program);
}