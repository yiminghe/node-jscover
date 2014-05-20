var expect = require('chai').expect;
var jscover = require('../../lib/jscover');
var fs = require('fs');
var path = require('path');
var util = require('kissy/lib/util');
var fixtureDir = path.join(__dirname, '../fixture');

function normalizeCodeContent(str) {
    return str.replace(/\r/g, '').trim();
}

function test(file) {
    if (file === 'switch') {
        debugger
    }
    var fileName = '/' + file + '.js';
    var fixture = path.join(fixtureDir, fileName);
    var result = path.join(__dirname, '../node-jscover' + fileName);
    var fixtureCode = normalizeCodeContent(fs.readFileSync(fixture, {
        encoding: 'utf-8'
    }));
    var resultCode = normalizeCodeContent(fs.readFileSync(result, {
        encoding: 'utf-8'
    }));
    expect(normalizeCodeContent(jscover.instrument(fixtureCode, fileName))).to.equal(resultCode);
}

describe('jscover', function () {
    var statements = [];

    var paths = fs.readdirSync(fixtureDir);

    paths.forEach(function (p) {
        if (p === '.' || p === '..') {
        } else {
            statements.push(path.basename(p, '.js'));
        }
    });

    statements.forEach(function (s) {
        it('instrument ' + s + ' statement', function () {
            test(s);
        });
    });
});