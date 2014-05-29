var jscover = require('../../lib/jscover');
var fs = require('fs');
var path = require('path');


var code = fs.readFileSync(path.join(__dirname, 'code.js'), {
    encoding: 'utf-8'
});

var coverFile = path.join(__dirname, 'cover.js');

var instrumented = jscover.instrument(code, coverFile);

fs.writeFileSync(path.join(__dirname, 'cover.js'), instrumented, {
    encoding: 'utf-8'
});
console.log('done');