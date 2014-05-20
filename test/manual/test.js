var jscover = require('../../lib/jscover');

console.log(jscover.instrument(['var x = {',
    'z:function(){',
    ' x=1;',
    '}',
    '};',
'(function q(){',
    'y=1;',
'})();'].join('\n'), 'test.js'));