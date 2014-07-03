if (! _$jscoverage['switch.js']) {
  _$jscoverage['switch.js'] = {};
  _$jscoverage['switch.js'].lineData = [];
  _$jscoverage['switch.js'].lineData[1] = 0;
  _$jscoverage['switch.js'].lineData[2] = 0;
  _$jscoverage['switch.js'].lineData[4] = 0;
  _$jscoverage['switch.js'].lineData[5] = 0;
  _$jscoverage['switch.js'].lineData[6] = 0;
  _$jscoverage['switch.js'].lineData[8] = 0;
  _$jscoverage['switch.js'].lineData[9] = 0;
  _$jscoverage['switch.js'].lineData[12] = 0;
  _$jscoverage['switch.js'].lineData[14] = 0;
  _$jscoverage['switch.js'].lineData[15] = 0;
  _$jscoverage['switch.js'].lineData[17] = 0;
  _$jscoverage['switch.js'].lineData[18] = 0;
  _$jscoverage['switch.js'].lineData[20] = 0;
}
if (! _$jscoverage['switch.js'].functionData) {
  _$jscoverage['switch.js'].functionData = [];
 _$jscoverage['switch.js'].functionData.index = [];
  _$jscoverage['switch.js'].functionData[0] = 0;
}
if (! _$jscoverage['switch.js'].branchData) {
  _$jscoverage['switch.js'].branchData = {};
  _$jscoverage['switch.js'].branchData['12'] = [];
  _$jscoverage['switch.js'].branchData['12'][1] = new BranchData();
}
_$jscoverage['switch.js'].branchData['12'][1].init(13, 6, 'x1 > 1');
function visit1_12_1(result) {
  _$jscoverage['switch.js'].branchData['12'][1].ranCondition(result);
  return result;
}
_$jscoverage['switch.js'].lineData[1]++;
function x(x1, y1) {
  _$jscoverage['switch.js'].functionData[0]++;
  _$jscoverage['switch.js'].functionData.index[0] = '1:x';
  _$jscoverage['switch.js'].lineData[2]++;
  switch (x1) {
  case 1:
    _$jscoverage['switch.js'].lineData[4]++;
    x1++;
    _$jscoverage['switch.js'].lineData[5]++;
    y1++;
    _$jscoverage['switch.js'].lineData[6]++;
    break;
  default:
    _$jscoverage['switch.js'].lineData[8]++;
    x1 += 2;
    _$jscoverage['switch.js'].lineData[9]++;
    y1 += 2;
  }
  _$jscoverage['switch.js'].lineData[12]++;
  switch (visit1_12_1(x1 > 1)) {
  case true:
    _$jscoverage['switch.js'].lineData[14]++;
    x1++;
    _$jscoverage['switch.js'].lineData[15]++;
    break;
  case false:
    _$jscoverage['switch.js'].lineData[17]++;
    x1--;
    _$jscoverage['switch.js'].lineData[18]++;
    break;
  }
  _$jscoverage['switch.js'].lineData[20]++;
  return {
    x1: x1,
    y1: y1
  };
}