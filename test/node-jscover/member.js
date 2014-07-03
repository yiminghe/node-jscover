if (! _$jscoverage['member.js']) {
  _$jscoverage['member.js'] = {};
  _$jscoverage['member.js'].lineData = [];
  _$jscoverage['member.js'].lineData[1] = 0;
  _$jscoverage['member.js'].lineData[2] = 0;
}
if (! _$jscoverage['member.js'].functionData) {
  _$jscoverage['member.js'].functionData = [];
  _$jscoverage['member.js'].functionData.index = [];
  _$jscoverage['member.js'].functionData[0] = 0;
  _$jscoverage['member.js'].functionData.index[0] = 'x';
}
if (! _$jscoverage['member.js'].branchData) {
  _$jscoverage['member.js'].branchData = {};
  _$jscoverage['member.js'].branchData['2'] = [];
  _$jscoverage['member.js'].branchData['2'][1] = new BranchData();
}
_$jscoverage['member.js'].branchData['2'][1].init(14, 5, 'q > z');
function visit1_2_1(result) {
  _$jscoverage['member.js'].branchData['2'][1].ranCondition(result);
  return result;
}
_$jscoverage['member.js'].lineData[1]++;
function x(z, q) {
  _$jscoverage['member.js'].functionData[0]++;
  _$jscoverage['member.js'].lineData[2]++;
  return z[visit1_2_1(q > z)];
}