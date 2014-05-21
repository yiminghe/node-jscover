/**
 * cli tools
 * @author yiminghe@gmail.com
 */

var program = require('commander');
var walk = require('walk');
var jscover = require('../lib/jscover');
var path = require('path');
var fs = require('fs');

program
    .option('-d, --dir <dir>', 'source file dir')
    .option('-o, --out <out>', 'instrumented file dir')
    .option('-f, --front', 'whether generate front-end')
    .parse(process.argv);

function normalizeSlash(str) {
    return str.replace(/\\/g, '/');
}

var dir = program.dir,
    out = program.out,
    front = program.front;

//noinspection JSUnresolvedFunction
var walker = walk.walk(dir);
walker.on('file', function (root, fileStats, next) {
    var filePath = path.join(root, fileStats.name);
    var subPath = filePath.substring(dir.length);
    var destPath = out + subPath;
    var code = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });
    var instrumentedCode = jscover.instrument(code, normalizeSlash(subPath));
    fs.writeFileSync(destPath, instrumentedCode, {
        encoding: 'utf-8'
    });
    console.log('generate instrumented file: ' + destPath + ' for ' + filePath);
    next();
});