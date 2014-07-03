if (! _$jscoverage['declare.js']) {
  _$jscoverage['declare.js'] = {};
  _$jscoverage['declare.js'].lineData = [];
  _$jscoverage['declare.js'].lineData[1] = 0;
  _$jscoverage['declare.js'].lineData[2] = 0;
  _$jscoverage['declare.js'].lineData[3] = 0;
  _$jscoverage['declare.js'].lineData[7] = 0;
  _$jscoverage['declare.js'].lineData[8] = 0;
  _$jscoverage['declare.js'].lineData[10] = 0;
}
if (! _$jscoverage['declare.js'].functionData) {
  _$jscoverage['declare.js'].functionData = [];
  _$jscoverage['declare.js'].functionData.index = [];
  _$jscoverage['declare.js'].functionData[0] = 0;
  _$jscoverage['declare.js'].functionData.index[0] = 'x';
  _$jscoverage['declare.js'].functionData[1] = 0;
  _$jscoverage['declare.js'].functionData.index[1] = 'anonymous';
  _$jscoverage['declare.js'].functionData[2] = 0;
  _$jscoverage['declare.js'].functionData.index[2] = 'x';
}
if (! _$jscoverage['declare.js'].branchData) {
  _$jscoverage['declare.js'].branchData = {};
  _$jscoverage['declare.js'].branchData['2'] = [];
  _$jscoverage['declare.js'].branchData['2'][1] = new BranchData();
  _$jscoverage['declare.js'].branchData['7'] = [];
  _$jscoverage['declare.js'].branchData['7'][1] = new BranchData();
}
_$jscoverage['declare.js'].branchData['7'][1].init(13, 28, 'q || function x() {\n  x++;\n}');
function visit2_7_1(result) {
  _$jscoverage['declare.js'].branchData['7'][1].ranCondition(result);
  return result;
}
_$jscoverage['declare.js'].branchData['2'][1].init(13, 6, 'z > 10');
function visit1_2_1(result) {
  _$jscoverage['declare.js'].branchData['2'][1].ranCondition(result);
  return result;
}
_$jscoverage['declare.js'].lineData[1]++;
function x(z) {
  _$jscoverage['declare.js'].functionData[0]++;
  _$jscoverage['declare.js'].lineData[2]++;
  var y = visit1_2_1(z > 10);
  _$jscoverage['declare.js'].lineData[3]++;
  var q = [function () {
        _$jscoverage['declare.js'].functionData[1]++;
      }];
  _$jscoverage['declare.js'].lineData[7]++;
  var z = visit2_7_1(q || function x() {
      _$jscoverage['declare.js'].functionData[2]++;
      _$jscoverage['declare.js'].lineData[8]++;
      x++;
    });
  _$jscoverage['declare.js'].lineData[10]++;
  return y;
}