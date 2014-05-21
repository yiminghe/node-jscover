/**
 * instrument branch condition
 * @author yiminghe@gmail.com
 */
var branchStatementBuilder = require('./branch-statement-builder');
var escodegen = require('escodegen');
var util = require('kissy/lib/util');

function BranchProcessor(fileName, root) {
    this.fileName = fileName;
    this.lineConditionMap = {};
    this.functionId = 1;
    this.root = root;
}

BranchProcessor.prototype = {
    buildBranchRecordingFunction: function (lineNo, conditionNo) {
        return branchStatementBuilder.buildBranchRecordingFunction(this.fileName,
            this.functionId++, lineNo, conditionNo);
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
        var source = escodegen.generate(node);
        var conditionArrayDeclaration = this
            .buildLineAndConditionInitialisation(line, conditionId, node.loc.start.column+1, source);
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
        } else if (parent.operator) {
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
        } else if (parentType === 'ArrayExpression') {
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
            throw new Error(util.substitute('Could not insert wrapper for parent {parent}, node {node} ' +
                'file: {file}, line: {line} ', {
                parent: parentType,
                node: node.type,
                file: this.fileName,
                line: line
            }));
        }
    }
};

module.exports = BranchProcessor;