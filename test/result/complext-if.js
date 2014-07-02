if (! _$jscoverage['complext-if.js']) {
  _$jscoverage['complext-if.js'] = {};
  _$jscoverage['complext-if.js'].lineData = [];
  _$jscoverage['complext-if.js'].lineData[1] = 0;
}
if (! _$jscoverage['complext-if.js'].functionData) {
  _$jscoverage['complext-if.js'].functionData = [];
}
if (! _$jscoverage['complext-if.js'].branchData) {
  _$jscoverage['complext-if.js'].branchData = {};
  _$jscoverage['complext-if.js'].branchData['1'] = [];
  _$jscoverage['complext-if.js'].branchData['1'][1] = new BranchData();
  _$jscoverage['complext-if.js'].branchData['1'][2] = new BranchData();
}
_$jscoverage['complext-if.js'].branchData['1'][2].init(9, 28, 'b.match(c) || [\n  \'\',\n  \'\'\n]');
function visit2_1_2(result) {
  _$jscoverage['complext-if.js'].branchData['1'][2].ranCondition(result);
  return result;
}
_$jscoverage['complext-if.js'].branchData['1'][1].init(5, 51, '!a[(b.match(c) || [\n  \'\',\n  \'\'\n])[1].toLowerCase()]');
function visit1_1_1(result) {
  _$jscoverage['complext-if.js'].branchData['1'][1].ranCondition(result);
  return result;
}
_$jscoverage['complext-if.js'].lineData[1]++;
if (visit1_1_1(!a[visit2_1_2(b.match(c) || [
    '',
    ''
  ])[1].toLowerCase()])) {
}