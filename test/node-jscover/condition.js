if (! _$jscoverage['condition.js']) {
  _$jscoverage['condition.js'] = {};
  _$jscoverage['condition.js'].lineData = [];
  _$jscoverage['condition.js'].lineData[1] = 0;
  _$jscoverage['condition.js'].lineData[2] = 0;
  _$jscoverage['condition.js'].lineData[3] = 0;
  _$jscoverage['condition.js'].lineData[4] = 0;
  _$jscoverage['condition.js'].lineData[5] = 0;
  _$jscoverage['condition.js'].lineData[6] = 0;
}
if (! _$jscoverage['condition.js'].functionData) {
  _$jscoverage['condition.js'].functionData = [];
 _$jscoverage['condition.js'].functionData.index = [];
  _$jscoverage['condition.js'].functionData[0] = 0;
}
if (! _$jscoverage['condition.js'].branchData) {
  _$jscoverage['condition.js'].branchData = {};
  _$jscoverage['condition.js'].branchData['2'] = [];
  _$jscoverage['condition.js'].branchData['2'][1] = new BranchData();
  _$jscoverage['condition.js'].branchData['3'] = [];
  _$jscoverage['condition.js'].branchData['3'][1] = new BranchData();
  _$jscoverage['condition.js'].branchData['3'][2] = new BranchData();
  _$jscoverage['condition.js'].branchData['4'] = [];
  _$jscoverage['condition.js'].branchData['4'][1] = new BranchData();
  _$jscoverage['condition.js'].branchData['5'] = [];
  _$jscoverage['condition.js'].branchData['5'][1] = new BranchData();
  _$jscoverage['condition.js'].branchData['6'] = [];
  _$jscoverage['condition.js'].branchData['6'][1] = new BranchData();
}
_$jscoverage['condition.js'].branchData['6'][1].init(8, 9, 'x1 === y1');
function visit6_6_1(result) {
  _$jscoverage['condition.js'].branchData['6'][1].ranCondition(result);
  return result;
}
_$jscoverage['condition.js'].branchData['5'][1].init(5, 7, 'x1 < y1');
function visit5_5_1(result) {
  _$jscoverage['condition.js'].branchData['5'][1].ranCondition(result);
  return result;
}
_$jscoverage['condition.js'].branchData['4'][1].init(10, 7, 'x1 > y1');
function visit4_4_1(result) {
  _$jscoverage['condition.js'].branchData['4'][1].ranCondition(result);
  return result;
}
_$jscoverage['condition.js'].branchData['3'][2].init(20, 8, 'x1 || y1');
function visit3_3_2(result) {
  _$jscoverage['condition.js'].branchData['3'][2].ranCondition(result);
  return result;
}
_$jscoverage['condition.js'].branchData['3'][1].init(10, 7, 'x1 > y1');
function visit2_3_1(result) {
  _$jscoverage['condition.js'].branchData['3'][1].ranCondition(result);
  return result;
}
_$jscoverage['condition.js'].branchData['2'][1].init(10, 7, 'x1 > y1');
function visit1_2_1(result) {
  _$jscoverage['condition.js'].branchData['2'][1].ranCondition(result);
  return result;
}
_$jscoverage['condition.js'].lineData[1]++;
function x(x1, y1, fn) {
  _$jscoverage['condition.js'].functionData[0]++;
  _$jscoverage['condition.js'].functionData.index[0] = '1:x';
  _$jscoverage['condition.js'].lineData[2]++;
  x1 = visit1_2_1(x1 > y1) ? 1 : 2;
  _$jscoverage['condition.js'].lineData[3]++;
  x1 = visit2_3_1(x1 > y1) ? visit3_3_2(x1 || y1) : x1;
  _$jscoverage['condition.js'].lineData[4]++;
  x1 = visit4_4_1(x1 > y1);
  _$jscoverage['condition.js'].lineData[5]++;
  visit5_5_1(x1 < y1);
  _$jscoverage['condition.js'].lineData[6]++;
  fn(visit6_6_1(x1 === y1));
}