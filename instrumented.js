function BranchData() {
    this.position = -1;
    this.nodeLength = -1;
    this.src = null;
    this.evalFalse = 0;
    this.evalTrue = 0;
    this.init = function (position, nodeLength, src) {
        this.position = position;
        this.nodeLength = nodeLength;
        this.src = src;
        return this;
    };
    this.ranCondition = function (result) {
        if (result)
            this.evalTrue++;
        else
            this.evalFalse++;
    };
    this.pathsCovered = function () {
        var paths = 0;
        if (this.evalTrue > 0)
            paths++;
        if (this.evalFalse > 0)
            paths++;
        return paths;
    };
    this.covered = function () {
        return this.evalTrue > 0 && this.evalFalse > 0;
    };
    this.toJSON = function () {
        return '{"position":' + this.position + ',"nodeLength":' + this.nodeLength + ',"src":' + jscoverage_quote(this.src) + ',"evalFalse":' + this.evalFalse + ',"evalTrue":' + this.evalTrue + '}';
    };
    this.message = function () {
        if (this.evalTrue === 0 && this.evalFalse === 0)
            return 'Condition never evaluated         :\t' + this.src;
        else if (this.evalTrue === 0)
            return 'Condition never evaluated to true :\t' + this.src;
        else if (this.evalFalse === 0)
            return 'Condition never evaluated to false:\t' + this.src;
        else
            return 'Condition covered';
    };
}
BranchData.fromJson = function (jsonString) {
    var json = eval('(' + jsonString + ')');
    var branchData = new BranchData();
    branchData.init(json.position, json.nodeLength, json.src);
    branchData.evalFalse = json.evalFalse;
    branchData.evalTrue = json.evalTrue;
    return branchData;
};
BranchData.fromJsonObject = function (json) {
    var branchData = new BranchData();
    branchData.init(json.position, json.nodeLength, json.src);
    branchData.evalFalse = json.evalFalse;
    branchData.evalTrue = json.evalTrue;
    return branchData;
};
function buildBranchMessage(conditions) {
    var message = 'The following was not covered:';
    for (var i = 0; i < conditions.length; i++) {
        if (conditions[i] !== undefined && conditions[i] !== null && !conditions[i].covered())
            message += '\n- ' + conditions[i].message();
    }
    return message;
}
;
function convertBranchDataConditionArrayToJSON(branchDataConditionArray) {
    var array = [];
    var length = branchDataConditionArray.length;
    for (var condition = 0; condition < length; condition++) {
        var branchDataObject = branchDataConditionArray[condition];
        if (branchDataObject === undefined || branchDataObject === null) {
            value = 'null';
        } else {
            value = branchDataObject.toJSON();
        }
        array.push(value);
    }
    return '[' + array.join(',') + ']';
}
function convertBranchDataLinesToJSON(branchData) {
    if (branchData === undefined) {
        return '{}';
    }
    var json = '';
    for (var line in branchData) {
        if (isNaN(line))
            continue;
        if (json !== '')
            json += ',';
        json += '"' + line + '":' + convertBranchDataConditionArrayToJSON(branchData[line]);
    }
    return '{' + json + '}';
}
function convertBranchDataLinesFromJSON(jsonObject) {
    if (jsonObject === undefined) {
        return {};
    }
    for (var line in jsonObject) {
        var branchDataJSON = jsonObject[line];
        if (branchDataJSON !== null) {
            for (var conditionIndex = 0; conditionIndex < branchDataJSON.length; conditionIndex++) {
                var condition = branchDataJSON[conditionIndex];
                if (condition !== null) {
                    branchDataJSON[conditionIndex] = BranchData.fromJsonObject(condition);
                }
            }
        }
    }
    return jsonObject;
}
function jscoverage_quote(s) {
    return '"' + s.replace(/[\u0000-\u001f"\\\u007f-\uffff]/g, function (c) {
        switch (c) {
        case '\b':
            return '\\b';
        case '\f':
            return '\\f';
        case '\n':
            return '\\n';
        case '\r':
            return '\\r';
        case '\t':
            return '\\t';
        case '"':
            return '\\"';
        case '\\':
            return '\\\\';
        default:
            return '\\u' + jscoverage_pad(c.charCodeAt(0).toString(16));
        }
    }) + '"';
}
function getArrayJSON(coverage) {
    var array = [];
    if (coverage === undefined)
        return array;
    var length = coverage.length;
    for (var line = 0; line < length; line++) {
        var value = coverage[line];
        if (value === undefined || value === null) {
            value = 'null';
        }
        array.push(value);
    }
    return array;
}
function jscoverage_serializeCoverageToJSON() {
    var json = [];
    for (var file in _$jscoverage) {
        var lineArray = getArrayJSON(_$jscoverage[file].lineData);
        var fnArray = getArrayJSON(_$jscoverage[file].functionData);
        json.push(jscoverage_quote(file) + ':{"lineData":[' + lineArray.join(',') + '],"functionData":[' + fnArray.join(',') + '],"branchData":' + convertBranchDataLinesToJSON(_$jscoverage[file].branchData) + '}');
    }
    return '{' + json.join(',') + '}';
}
function jscoverage_parseCoverageJSON(data) {
    var result = {};
    var json = eval('(' + data + ')');
    var file;
    for (file in json) {
        var fileCoverage = json[file];
        result[file] = {};
        result[file].lineData = fileCoverage.lineData;
        result[file].functionData = fileCoverage.functionData;
        result[file].branchData = convertBranchDataLinesFromJSON(fileCoverage.branchData);
    }
    return result;
}
function jscoverage_pad(s) {
    return '0000'.substr(s.length) + s;
}
function jscoverage_html_escape(s) {
    return s.replace(/[<>\&\"\']/g, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
}
try {
    if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
        if (!top.opener._$jscoverage) {
            top.opener._$jscoverage = {};
        }
    }
} catch (e) {
}
try {
    if (typeof top === 'object' && top !== null) {
        try {
            if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
                top._$jscoverage = top.opener._$jscoverage;
            }
        } catch (e) {
        }
        if (!top._$jscoverage) {
            top._$jscoverage = {};
        }
    }
} catch (e) {
}
try {
    if (typeof top === 'object' && top !== null && top._$jscoverage) {
        this._$jscoverage = top._$jscoverage;
    }
} catch (e) {
}
if (!this._$jscoverage) {
    this._$jscoverage = {};
}
if (!_$jscoverage['/declare.js']) {
    _$jscoverage['/declare.js'] = {};
    _$jscoverage['/declare.js'].lineData = [];
    _$jscoverage['/declare.js'].lineData[1] = 0;
    _$jscoverage['/declare.js'].lineData[2] = 0;
    _$jscoverage['/declare.js'].lineData[3] = 0;
    _$jscoverage['/declare.js'].lineData[7] = 0;
    _$jscoverage['/declare.js'].lineData[9] = 0;
}
if (!_$jscoverage['/declare.js'].functionData) {
    _$jscoverage['/declare.js'].functionData = [];
    _$jscoverage['/declare.js'].functionData[0] = 0;
    _$jscoverage['/declare.js'].functionData[1] = 0;
    _$jscoverage['/declare.js'].functionData[2] = 0;
}
if (!_$jscoverage['/declare.js'].branchData) {
    _$jscoverage['/declare.js'].branchData = {};
    _$jscoverage['/declare.js'].branchData['2'] = [];
    _$jscoverage['/declare.js'].branchData['2'][1] = new BranchData();
    _$jscoverage['/declare.js'].branchData['7'] = [];
    _$jscoverage['/declare.js'].branchData['7'][1] = new BranchData();
}
_$jscoverage['/declare.js'].branchData['7'][1].init('-1', 24, 'q || function() {\n}');
function visit8_7_1(result) {
    _$jscoverage['/declare.js'].branchData['7'][1].ranCondition(result);
    return result;
}
_$jscoverage['/declare.js'].branchData['2'][1].init('-1', 6, 'z > 10');
function visit7_2_1(result) {
    _$jscoverage['/declare.js'].branchData['2'][1].ranCondition(result);
    return result;
}
_$jscoverage['/declare.js'].lineData[1]++;
function x(z) {
    _$jscoverage['/declare.js'].functionData[0]++;
    _$jscoverage['/declare.js'].lineData[2]++;
    var y = visit7_2_1(z > 10);
    _$jscoverage['/declare.js'].lineData[3]++;
    var q = [function () {
                _$jscoverage['/declare.js'].functionData[1]++;
            }];
    _$jscoverage['/declare.js'].lineData[7]++;
    var z = visit8_7_1(q || function () {
            _$jscoverage['/declare.js'].functionData[2]++;
        });
    _$jscoverage['/declare.js'].lineData[9]++;
    return y;
}