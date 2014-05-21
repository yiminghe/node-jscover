var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
var esprima = require('esprima');
var escodegen = require('escodegen');
var estraverse = require('estraverse');
var cli = require('../../bin/jscover');
var jsCoverDir = path.join(__dirname, '../jscover/');
var nodeJsCoverDir = path.join(__dirname, '../node-jscover/');
var srcDir = path.join(__dirname, '../front-end/original-src');
var mkdirp = require('mkdirp');
var fsExtra = require('fs-extra');

function getLevel(level, node) {
    while (level && node.type === 'MemberExpression') {
        level--;
        node = node.object;
    }
    return level ? null : node;
}

function normalizeCodeContent(str) {
    str = str.replace(/\r/g, '').trim();
    var ast = esprima.parse(str, {
        attachComment: true
    });

    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (node.type === 'MemberExpression' && node.property.name === 'init') {
                var inner = getLevel(5, node);
                if (inner && inner.name === '_$jscoverage') {
                    parent['arguments'][0].value = '-1';
                    parent['arguments'][1].value = parent['arguments'][2].value.length;
                }
            }
        }
    });

    str = escodegen.generate(ast, {
        format: {
            indent: {
                style: '  '
            }
        }
    });
    return str;
}

function test(file) {
    if (file !== 'if') {
        //return;
    }
    var fileName = '/' + file + '.js';
    var instrument = path.join(jsCoverDir, fileName);
    var result = path.join(nodeJsCoverDir, fileName);
    var resultCode = normalizeCodeContent(fs.readFileSync(result, {
        encoding: 'utf-8'
    }));
    var instrumented = normalizeCodeContent(fs.readFileSync(instrument, {
        encoding: 'utf-8'
    }));
    if (instrumented !== resultCode) {
        mkdirp.sync('tmp/')
        fs.writeFileSync('tmp/' + file + '-instrumented.js', instrumented, {
            encoding: 'utf-8'
        });
        fs.writeFileSync('tmp/' + file + '-resultCode.js', resultCode, {
            encoding: 'utf-8'
        });
    }
    expect(instrumented).to.equal(resultCode);
}

describe('jscover', function () {
    var statements = [];

    fsExtra.removeSync('tmp');

    var paths = fs.readdirSync(srcDir);

    paths.forEach(function (p) {
        if (p === '.' || p === '..') {
        } else {
            statements.push(path.basename(p, '.js'));
        }
    });

    cli.run({
        dir: srcDir,
        out: nodeJsCoverDir,
        silent: true
    });


    statements.forEach(function (s) {
        it('instrument ' + s + ' statement', function () {
            test(s);
        });
    });
});