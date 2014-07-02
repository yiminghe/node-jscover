if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js']) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'] = {};
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[1] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[2] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[3] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[7] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[8] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[10] = 0;
}
if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData[0] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData[1] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData[2] = 0;
}
if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData = {};
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['2'] = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['2'][1] = new BranchData();
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['7'] = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['7'][1] = new BranchData();
}
_$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['7'][1].init(13, 28, 'q || function x() {\n  x++;\n}');
function visit2_7_1(result) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['7'][1].ranCondition(result);
  return result;
}
_$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['2'][1].init(13, 6, 'z > 10');
function visit1_2_1(result) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].branchData['2'][1].ranCondition(result);
  return result;
}
_$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[1]++;
function x(z) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData[0]++;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[2]++;
  var y = visit1_2_1(z > 10);
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[3]++;
  var q = [function () {
        _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData[1]++;
      }];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[7]++;
  var z = visit2_7_1(q || function x() {
      _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].functionData[2]++;
      _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[8]++;
      x++;
    });
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/declare.js'].lineData[10]++;
  return y;
}