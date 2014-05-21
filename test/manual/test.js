var jscover = require('../../lib/jscover');
var fs = require('fs');
var path = require('path');


var code = fs.readFileSync(path.join(__dirname, 'code.js'), {
    encoding: 'utf-8'
});

fs.writeFileSync(path.join(__dirname, 'cover.js'),
    jscover.instrument(code, path.join(__dirname, 'cover.js')), {
        encoding: 'utf-8'
    });