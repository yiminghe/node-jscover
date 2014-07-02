if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js']) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'] = {};
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[1] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[2] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[4] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[5] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[6] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[8] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[9] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[12] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[14] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[15] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[17] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[18] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[20] = 0;
}
if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].functionData) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].functionData = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].functionData[0] = 0;
}
if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].branchData) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].branchData = {};
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].branchData['12'] = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].branchData['12'][1] = new BranchData();
}
_$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].branchData['12'][1].init(13, 6, 'x1 > 1');
function visit1_12_1(result) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].branchData['12'][1].ranCondition(result);
  return result;
}
_$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[1]++;
function x(x1, y1) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].functionData[0]++;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[2]++;
  switch (x1) {
  case 1:
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[4]++;
    x1++;
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[5]++;
    y1++;
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[6]++;
    break;
  default:
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[8]++;
    x1 += 2;
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[9]++;
    y1 += 2;
  }
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[12]++;
  switch (visit1_12_1(x1 > 1)) {
  case true:
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[14]++;
    x1++;
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[15]++;
    break;
  case false:
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[17]++;
    x1--;
    _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[18]++;
    break;
  }
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/switch.js'].lineData[20]++;
  return {
    x1: x1,
    y1: y1
  };
}