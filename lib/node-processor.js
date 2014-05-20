/**
 * traverse ast node and instrument
 * @author yiminghe@gmail.com
 */
var StatementBuilder = require('./statement-builder');
var util = require('kissy/lib/util');
var debug = require('debug')('NodeProcessor');

function NodeProcessor(fileName) {
    this.fileName = fileName;
    this.validLines = {};
    this.functionNumber = 0;
}

NodeProcessor.prototype = {
    buildInstrumentationStatement: function (lineNumber) {
        return StatementBuilder.buildInstrumentationStatement(lineNumber, this.fileName, this.validLines);
    },

    buildFunctionInstrumentationStatement: function () {
        return StatementBuilder.buildFunctionInstrumentationStatement(this.functionNumber, this.fileName);
    },

    insertBefore: function (node, parent, bodyProperty) {
        var line = node.loc.start.line;
        var fileName = this.fileName;
        if (parent) {
            bodyProperty = bodyProperty || 'body';
            var body = parent[bodyProperty];
            if (util.isArray(body)) {
                body.splice(body.indexOf(node), 0, this.buildInstrumentationStatement(node.loc.start.line));
            } else {
                throw  new Error('body is not array. parent type: ' + parent.type + ', node type: ' + node.type);
            }
        } else {
            debug('parent is null for fileName: ' + fileName + ' line: ' + line);
        }
    },

    processNode: function (node, parent) {
        // instrumented code
        if (!node.loc) {
            return;
        }

        var type = node.type;
        var line = node.loc.start.line;
        var validLines = this.validLines;
        var body;
        var parentType;

        // function coverage
        // function x(){} => function x(){function++;}
        if (type === 'FunctionExpression' || type === 'FunctionDeclaration') {
            body = node.body;
            if (body) {
                body.body.unshift(this.buildFunctionInstrumentationStatement());
            }
        }

        if (validLines[line]) {
            // Don't add instrumentation if already there
            return;
        }


        parentType = parent.type;
        // var x= {z:1}
        if (parent.type === 'ObjectExpression' ||
            // (function(){})();
            parent.type === 'CallExpression') {
            return;
        }

        if (util.inArray(type, [
            'ExpressionStatement',
            'WithStatement',
            'EmptyExpression',
            'ForStatement',
            'ForInStatement',
            'ForOfStatement',
            'WhileStatement',
            'DoWhileStatement',
            'ContinueStatement',
            'VariableDeclaration',
            'SwitchStatement',
            'BreakStatement',
            'EmptyStatement',
            'ThrowStatement',
            'ReturnStatement',
            'LabeledStatement',
            'FunctionExpression',
            'FunctionDeclaration',
            'TryStatement',
            'DebuggerStatement'
        ])) {
            if (util.inArray(parentType, [
                'BinaryExpression',
                'VariableDeclarator',
                'ConditionalExpression',
                'ArrayExpression',
                'ExpressionStatement'
            ])) {
                return;
            }

            var blockNode;

            if (util.inArray(parentType, [
                'ForStatement',
                'ForInStatement',
                'ForOfStatement',
                'WhileStatement',
                'DoWhileStatement',
                'LabeledStatement',
                'WithStatement',
                'IfStatement'
            ])) {
                // while(1) x++
                blockNode = {
                    type: 'BlockStatement',
                    body: [this.buildInstrumentationStatement(line), node]
                };
                // if(x>1) y++; else z++;
                if (parentType === 'IfStatement') {
                    if (parent.consequent === node) {
                        parent.consequent = blockNode;
                    } else if (parent.alternate === node) {
                        parent.alternate = blockNode;
                    }
                } else {
                    parent.body = blockNode;
                }
            } else {
                this.insertBefore(node, parent, parentType === 'SwitchCase' ? 'consequent' : 'body');
            }
        }
    }
};

module.exports = NodeProcessor;