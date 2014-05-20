/**
 * node version of jscover
 * @author yiminghe@gmail.com
 */
var esprima = require('esprima');
var estraverse = require('estraverse');
var escodegen = require('escodegen');
var NodeProcessor = require('./node-processor');
var BranchProcessor = require('./branch-processor');
var fs = require('fs');
var path = require('path');
var substitute = require('kissy/lib/util').substitute;
var header = fs.readFileSync(path.join(__dirname, './resource/header.js'), {
    encoding: 'utf-8'
});
header = '';
var initLine = '  _$jscoverage[\'{fileName}\'].lineData[{line}] = 0;';
// Function Coverage (HA-CA)
var initFunction = '  _$jscoverage[\'{fileName}\'].functionData[{num}] = 0;\n';
/*jshint quotmark:false, loopfunc:true*/
var initBranchLine = "  _$jscoverage['{fileName}'].branchData['{line}'] = [];\n";
var initBranchCondition = "  _$jscoverage['{fileName}'].branchData['{line}'][{condition}] = new BranchData();\n";

function isBoolean(node, parent) {
    switch (node.operator) {
        case '===':
        case '==':
        case '!==':
        case '!=':
        case '>':
        case '>=':
        case '<':
        case '<=':
        case '||':
        case '&&':
            return true;
    }
    if (parent && parent.test) {
        return parent.test === node;
    }
    return false;
}

function escapeFileName(fileName) {
    return fileName.replace(/\\/g, '\\\\').replace(/'/g, /\\'/);
}

function getJsLineInitialization(fileName, validLines) {
    fileName = escapeFileName(fileName);
    var sb = [substitute('if (! _$jscoverage[\'{fileName}\']) {', {
        fileName: fileName
    })];
    sb.push(substitute('  _$jscoverage[\'{fileName}\'] = {};', {
        fileName: fileName
    }));
    sb.push(substitute('  _$jscoverage[\'{fileName}\'].lineData = [];', {
        fileName: fileName
    }));
    for (var line in validLines) {
        if (validLines.hasOwnProperty(line)) {
            sb.push(substitute(initLine, {
                fileName: fileName,
                line: line
            }));
        }
    }
    sb.push('}');
    return sb.join('\n');
}

function getJsFunctionInitialization(fileName, numFunction) {
    fileName = escapeFileName(fileName);
    var sb = [substitute('if (! _$jscoverage[\'{fileName}\'].functionData) {', {
        fileName: fileName
    })];
    sb.push(substitute('  _$jscoverage[\'{fileName}\'].functionData = {};', {
        fileName: fileName
    }));

    for (var i = 0; i < numFunction; ++i) {
        sb.append(substitute(initFunction, {
            fileName: fileName,
            num: i
        }));
    }
    sb.push('}');
    return sb.join('\n');
}

function getJsBranchInitialization(fileName, lineConditionMap) {
    fileName = escapeFileName(fileName);
    var sb = [substitute('if (! _$jscoverage[\'{fileName}\'].branchData) {', {
        fileName: fileName
    })];
    sb.push(substitute('  _$jscoverage[\'{fileName}\'].branchData = {};', {
        fileName: fileName
    }));

    for (var line in lineConditionMap) {
        if (lineConditionMap.hasOwnProperty(line)) {
            sb.push(substitute(initBranchLine, {
                fileName: fileName,
                line: line
            }));
            if (lineConditionMap[line]) {
                lineConditionMap[line].forEach(function (condition) {
                    sb.push(substitute(initBranchCondition, {
                        fileName: fileName,
                        line: line,
                        condition: condition
                    }));
                });
            }
        }
    }
    sb.push('}');
    return sb.join('\n');
}

function instrument(code, fileName) {
    var ast = esprima.parse(code, {
        attachComment: true,
        loc: true
    });

    var nodeProcess = new NodeProcessor(fileName);

    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (parent) {
                nodeProcess.processNode(node, parent);
            }
        }
    });

    var branchProcess = new BranchProcessor(fileName, ast);

    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (parent && isBoolean(node, parent)) {
                branchProcess.processNode(node, parent);
            }
        }
    });

    var jsLineInitialization = getJsLineInitialization(fileName, nodeProcess.validLines);
    jsLineInitialization += getJsFunctionInitialization(fileName, nodeProcess.functionNumber);
    jsLineInitialization += getJsBranchInitialization(fileName, branchProcess.lineConditionMap);
    // console.log(JSON.stringify(ast,null,2));
    return [header , jsLineInitialization, escodegen.generate(ast)].join('\n');
}

exports.instrument = instrument;