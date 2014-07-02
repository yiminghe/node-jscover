var jscover = require('../../lib/jscover');
var fs = require('fs');
var path = require('path');
var codeFile = path.join(__dirname, 'code.js');

var code = fs.readFileSync(codeFile, {
    encoding: 'utf-8'
});

var instrumented = jscover.instrument(code, codeFile);

fs.writeFileSync(path.join(__dirname, 'cover.js'), instrumented, {
    encoding: 'utf-8'
});
console.log('done');