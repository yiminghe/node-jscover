var expect = require('chai').expect;
var jscover = require('../../lib/jscover');
var fs = require('fs');
var path = require('path');
var fixtureDir = path.join(__dirname, '../fixture');

function normalizeCodeContent(str) {
    return str.replace(/\r/g, '').trim();
}

function test(file) {
    var fileName = '/' + file + '.js';
    var fixture = path.join(fixtureDir, fileName);
    var result = path.join(__dirname, '../node-jscover/' + fileName);
    var fixtureCode = fs.readFileSync(fixture, {
        encoding: 'utf-8'
    });
    var resultCode = fs.readFileSync(result, {
        encoding: 'utf-8'
    });
    expect((jscover.instrument(fixtureCode, fileName, {
        excludeInitializer: true,
        excludeHeader: true
    }))).to.equal(normalizeCodeContent(resultCode));
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