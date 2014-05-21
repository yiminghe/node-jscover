/**
 * instrument branch condition
 * @author yiminghe@gmail.com
 */
var branchStatementBuilder = require('./branch-statement-builder');
var escodegen = require('escodegen');
var util = require('kissy/lib/util');
var estraverse = require('estraverse');

var functionId = 1;

function removeChildFromParent(child, parent) {
    var body = parent.body;
    if (util.isArray(body)) {
        body.splice(body.indexOf(child), 1);
    }
}

function getNodeOriginalSource(node) {
    var newNode = util.clone(node);
    estraverse.replace(newNode, {
        enter: function (n, parent) {
            // remove coverage statement
            if (n.coverage) {
                removeChildFromParent(n, parent);
                this.skip();
            }
        }
    });
    return escodegen.generate(newNode, {
        format: {
            indent: {
                style: '  '
            }
        }
    });
    //var source = escodegen.generate(newNode);
    //return source;
}

function BranchProcessor(fileName, root) {
    this.fileName = fileName;
    this.lineConditionMap = {};
    this.root = root;
}

function getLinePosition(node) {
    return node.loc.start.column + 1;
}

BranchProcessor.prototype = {
    buildBranchRecordingFunction: function (lineNo, conditionNo) {
        return branchStatementBuilder.buildBranchRecordingFunction(this.fileName,
            functionId++, lineNo, conditionNo);
    },

    buildLineAndConditionInitialisation: function (line, conditionId, position, source) {
        return branchStatementBuilder.buildLineAndConditionInitialisation(this.fileName, line,
            conditionId, position, source);
    },

    processNode: function (node, parent) {
        if (!node.loc) {
            return;
        }
        var parentType = parent.type;
        var lineConditionMap = this.lineConditionMap;
        var conditionId = 1;
        var line = node.loc.start.line;
        var conditions = lineConditionMap[line];
        if (conditions) {
            conditionId = conditions[conditions.length - 1] + 1;
        } else {
            conditions = [];
            lineConditionMap[line] = conditions;
        }
        conditions.push(conditionId);
        var functionNode = this.buildBranchRecordingFunction(line, conditionId);
        this.root.body.unshift(functionNode);
        // bug var y = (x || function(){});
        // already augmented
        var source = getNodeOriginalSource(node);
        var conditionArrayDeclaration = this
            .buildLineAndConditionInitialisation(line, conditionId,
            getLinePosition(node),
            //  node.loc.start.column + 1,
            source);
        this.root.body.unshift(conditionArrayDeclaration);
        var functionCall = {
            type: 'CallExpression',
            callee: {
                type: 'Identifier',
                name: functionNode.id.name
            },
            'arguments': [node]
        };
        // WhileStatement IfStatement ConditionalExpression DoWhileStatement ForStatement
        if (node === parent.test) {
            parent.test = functionCall;
        } else if (parentType === 'ConditionalExpression') {
            // x = x>y?x||y:1;
            if (parent.alternate === node) {
                parent.alternate = functionCall;
            } else if (parent.consequent === node) {
                parent.consequent = functionCall;
            }
        }
        else if (parent.operator) {
            if (parent.left === node) {
                parent.left = functionCall;
            } else if (parent.right === node) {
                parent.right = functionCall;
            }
        } else if (parentType === 'ReturnStatement') {
            parent.argument = functionCall;
        } else if (parentType === 'VariableDeclarator') {
            parent.init = functionCall;
        } else if (parentType === 'SwitchStatement') {
            parent.discriminant = functionCall;
        } else if (parentType === 'MemberExpression') {
            parent.property = functionCall;
        } else if (parentType === 'ExpressionStatement') {
            parent.expression = functionCall;
        } else if (parentType === 'Property') {
            // x = {y: z||function(){}}
            parent.value = functionCall;
        }
        else if (parentType === 'ArrayExpression') {
            var elements = parent.elements;
            elements.forEach(function (e, i) {
                if (e === node) {
                    elements[i] = functionCall;
                }
            });
        } else if (parentType === 'CallExpression') {
            var args = parent['arguments'];
            args.forEach(function (e, i) {
                if (e === node) {
                    args[i] = functionCall;
                }
            });
        } else {
            throw new Error(util.substitute(['Could not insert wrapper for parent {parent}, node {node} ' +
                'file: {file}, line: {line} ',
                    'source: ' + escodegen.generate(node),
                    'ast: ' + JSON.stringify(node, null, 2)
            ].join('\n'), {
                parent: parentType,
                node: node.type,
                file: this.fileName,
                line: line
            }));
        }
    }
};

module.exports = BranchProcessor;