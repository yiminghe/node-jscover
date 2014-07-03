if (! _$jscoverage['sequence-expression.js']) {
  _$jscoverage['sequence-expression.js'] = {};
  _$jscoverage['sequence-expression.js'].lineData = [];
  _$jscoverage['sequence-expression.js'].lineData[1] = 0;
  _$jscoverage['sequence-expression.js'].lineData[2] = 0;
}
if (! _$jscoverage['sequence-expression.js'].functionData) {
  _$jscoverage['sequence-expression.js'].functionData = [];
  _$jscoverage['sequence-expression.js'].functionData.index = [];
}
if (! _$jscoverage['sequence-expression.js'].branchData) {
  _$jscoverage['sequence-expression.js'].branchData = {};
  _$jscoverage['sequence-expression.js'].branchData['1'] = [];
  _$jscoverage['sequence-expression.js'].branchData['1'][1] = new BranchData();
  _$jscoverage['sequence-expression.js'].branchData['1'][2] = new BranchData();
  _$jscoverage['sequence-expression.js'].branchData['2'] = [];
  _$jscoverage['sequence-expression.js'].branchData['2'][1] = new BranchData();
  _$jscoverage['sequence-expression.js'].branchData['2'][2] = new BranchData();
  _$jscoverage['sequence-expression.js'].branchData['2'][3] = new BranchData();
  _$jscoverage['sequence-expression.js'].branchData['2'][4] = new BranchData();
}
_$jscoverage['sequence-expression.js'].branchData['2'][4].init(34, 5, 'i < 1');
function visit6_2_4(result) {
  _$jscoverage['sequence-expression.js'].branchData['2'][4].ranCondition(result);
  return result;
}
_$jscoverage['sequence-expression.js'].branchData['2'][3].init(13, 7, 'l !== f');
function visit5_2_3(result) {
  _$jscoverage['sequence-expression.js'].branchData['2'][3].ranCondition(result);
  return result;
}
_$jscoverage['sequence-expression.js'].branchData['2'][2].init(13, 12, 'l !== f && l');
function visit4_2_2(result) {
  _$jscoverage['sequence-expression.js'].branchData['2'][2].ranCondition(result);
  return result;
}
_$jscoverage['sequence-expression.js'].branchData['2'][1].init(5, 30, 'w && (u = l !== f && l, i = n)');
function visit3_2_1(result) {
  _$jscoverage['sequence-expression.js'].branchData['2'][1].ranCondition(result);
  return result;
}
_$jscoverage['sequence-expression.js'].branchData['1'][2].init(8, 2, '!u');
function visit2_1_2(result) {
  _$jscoverage['sequence-expression.js'].branchData['1'][2].ranCondition(result);
  return result;
}
_$jscoverage['sequence-expression.js'].branchData['1'][1].init(4, 9, 'i = 1, !u');
function visit1_1_1(result) {
  _$jscoverage['sequence-expression.js'].branchData['1'][1].ranCondition(result);
  return result;
}
_$jscoverage['sequence-expression.js'].lineData[1]++;
if (visit1_1_1((i = 1, visit2_1_2(!u)))) {
}
_$jscoverage['sequence-expression.js'].lineData[2]++;
for (visit3_2_1(w && (u = visit4_2_2(visit5_2_3(l !== f) && l), i = n)); visit6_2_4(i < 1); i++) {
}