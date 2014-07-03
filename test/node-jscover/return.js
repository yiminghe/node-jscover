if (! _$jscoverage['return.js']) {
  _$jscoverage['return.js'] = {};
  _$jscoverage['return.js'].lineData = [];
  _$jscoverage['return.js'].lineData[1] = 0;
  _$jscoverage['return.js'].lineData[2] = 0;
  _$jscoverage['return.js'].lineData[3] = 0;
  _$jscoverage['return.js'].lineData[4] = 0;
  _$jscoverage['return.js'].lineData[5] = 0;
  _$jscoverage['return.js'].lineData[7] = 0;
}
if (! _$jscoverage['return.js'].functionData) {
  _$jscoverage['return.js'].functionData = [];
  _$jscoverage['return.js'].functionData.index = [];
  _$jscoverage['return.js'].functionData[0] = 0;
  _$jscoverage['return.js'].functionData.index[0] = 'x';
}
if (! _$jscoverage['return.js'].branchData) {
  _$jscoverage['return.js'].branchData = {};
  _$jscoverage['return.js'].branchData['2'] = [];
  _$jscoverage['return.js'].branchData['2'][1] = new BranchData();
  _$jscoverage['return.js'].branchData['3'] = [];
  _$jscoverage['return.js'].branchData['3'][1] = new BranchData();
  _$jscoverage['return.js'].branchData['4'] = [];
  _$jscoverage['return.js'].branchData['4'][1] = new BranchData();
  _$jscoverage['return.js'].branchData['5'] = [];
  _$jscoverage['return.js'].branchData['5'][1] = new BranchData();
  _$jscoverage['return.js'].branchData['7'] = [];
  _$jscoverage['return.js'].branchData['7'][1] = new BranchData();
}
_$jscoverage['return.js'].branchData['7'][1].init(16, 6, 'z > 10');
function visit5_7_1(result) {
  _$jscoverage['return.js'].branchData['7'][1].ranCondition(result);
  return result;
}
_$jscoverage['return.js'].branchData['5'][1].init(16, 7, 'z > -10');
function visit4_5_1(result) {
  _$jscoverage['return.js'].branchData['5'][1].ranCondition(result);
  return result;
}
_$jscoverage['return.js'].branchData['4'][1].init(16, 5, 'z < 2');
function visit3_4_1(result) {
  _$jscoverage['return.js'].branchData['4'][1].ranCondition(result);
  return result;
}
_$jscoverage['return.js'].branchData['3'][1].init(17, 5, 'z > 2');
function visit2_3_1(result) {
  _$jscoverage['return.js'].branchData['3'][1].ranCondition(result);
  return result;
}
_$jscoverage['return.js'].branchData['2'][1].init(9, 5, 'z > 1');
function visit1_2_1(result) {
  _$jscoverage['return.js'].branchData['2'][1].ranCondition(result);
  return result;
}
_$jscoverage['return.js'].lineData[1]++;
function x(z) {
  _$jscoverage['return.js'].functionData[0]++;
  _$jscoverage['return.js'].lineData[2]++;
  if (visit1_2_1(z > 1)) {
    _$jscoverage['return.js'].lineData[3]++;
    return [visit2_3_1(z > 2)];
  } else {
    _$jscoverage['return.js'].lineData[4]++;
    if (visit3_4_1(z < 2)) {
      _$jscoverage['return.js'].lineData[5]++;
      return visit4_5_1(z > -10) ? 1 : 2;
    } else {
      _$jscoverage['return.js'].lineData[7]++;
      return visit5_7_1(z > 10);
    }
  }
}