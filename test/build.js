var jscover = require('../bin/jscover');
var path = require('path');
var fs = require('fs');
var src = path.join(__dirname, 'front-end/original-src').toLowerCase();
var dest = path.join(__dirname, 'node-jscover').toLowerCase();
var srcFiles = fs.readdirSync(src);
srcFiles.forEach(function (f) {
    var destFile = path.join(dest, f);
    f = path.join(src, f);
    jscover.transformFile({
        src: f,
        name: path.basename(f),
        dest: destFile,
        header: false,
        silent: true,
        reset: true
    });
});