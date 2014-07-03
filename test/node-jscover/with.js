if (! _$jscoverage['with.js']) {
  _$jscoverage['with.js'] = {};
  _$jscoverage['with.js'].lineData = [];
  _$jscoverage['with.js'].lineData[1] = 0;
  _$jscoverage['with.js'].lineData[2] = 0;
  _$jscoverage['with.js'].lineData[3] = 0;
  _$jscoverage['with.js'].lineData[4] = 0;
}
if (! _$jscoverage['with.js'].functionData) {
  _$jscoverage['with.js'].functionData = [];
  _$jscoverage['with.js'].functionData.index = [];
  _$jscoverage['with.js'].functionData[0] = 0;
  _$jscoverage['with.js'].functionData.index[0] = 'x';
}
if (! _$jscoverage['with.js'].branchData) {
  _$jscoverage['with.js'].branchData = {};
}
_$jscoverage['with.js'].lineData[1]++;
function x(x1) {
  _$jscoverage['with.js'].functionData[0]++;
  _$jscoverage['with.js'].lineData[2]++;
  with (x1) {
    _$jscoverage['with.js'].lineData[3]++;
    x1++;
  }
  _$jscoverage['with.js'].lineData[4]++;
  return x1;
}