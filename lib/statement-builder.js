/**
 * build instrument statement
 * @author yiminghe@gmail.com
 */
/*jshint quotmark:false*/
exports.buildFunctionInstrumentationStatement = function (functionNumber, lineNumber, functionName, fileName) {
    return [
        {
            coverage: 1,
            "type": "ExpressionStatement",
            "expression": {
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                    "type": "MemberExpression",
                    computed: true,
                    "object": {
                        "type": "MemberExpression",
                        "object": {
                            "type": "MemberExpression",
                            computed: true,
                            "object": {
                                "type": "Identifier",
                                "name": "_$jscoverage"
                            },
                            "property": {
                                "type": "Literal",
                                "value": fileName
                            }
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "functionData"
                        }
                    },
                    "property": {
                        "type": "Literal",
                        "value": functionNumber
                    }
                },
                "prefix": false
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                    "type": "Identifier",
                                    "name": "_$jscoverage"
                                },
                                "property": {
                                    "type": "Literal",
                                    "value": fileName
                                }
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "functionData"
                            }
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "index"
                        }
                    },
                    "property": {
                        "type": "Literal",
                        "value": functionNumber
                    }
                },
                "right": {
                    "type": "Literal",
                    "value": lineNumber + ':' + functionName
                }
            }
        }
    ];
};

exports.buildInstrumentationStatement = function (lineNumber, fileName, validLines) {
    validLines[lineNumber] = 1;
    return {
        coverage: 1,
        "type": "ExpressionStatement",
        "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "argument": {
                "type": "MemberExpression",
                computed: true,
                "object": {
                    "type": "MemberExpression",
                    "object": {
                        "type": "MemberExpression",
                        computed: true,
                        "object": {
                            "type": "Identifier",
                            "name": "_$jscoverage"
                        },
                        "property": {
                            "type": "Literal",
                            "value": fileName
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "lineData"
                    }
                },
                "property": {
                    "type": "Literal",
                    "value": lineNumber
                }
            },
            "prefix": false
        }
    };
};