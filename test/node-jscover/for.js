if (! _$jscoverage['/for.js']) {
  _$jscoverage['/for.js'] = {};
  _$jscoverage['/for.js'].lineData = [];
  _$jscoverage['/for.js'].lineData[1] = 0;
  _$jscoverage['/for.js'].lineData[2] = 0;
}
if (! _$jscoverage['/for.js'].functionData) {
  _$jscoverage['/for.js'].functionData = [];
}
if (! _$jscoverage['/for.js'].branchData) {
  _$jscoverage['/for.js'].branchData = {};
  _$jscoverage['/for.js'].branchData['1'] = [];
  _$jscoverage['/for.js'].branchData['1'][1] = new BranchData();
}
_$jscoverage['/for.js'].branchData['1'][1].init(18, 7, 'i >= 10');
function visit11_1_1(result) {
  _$jscoverage['/for.js'].branchData['1'][1].ranCondition(result);
  return result;
}
_$jscoverage['/for.js'].lineData[1]++;
for (var i = 10; visit11_1_1(i >= 10); i--) {
  _$jscoverage['/for.js'].lineData[2]++;
  x++;
}