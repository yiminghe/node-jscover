if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js']) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'] = {};
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].lineData = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].lineData[1] = 0;
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].lineData[2] = 0;
}
if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].functionData) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].functionData = [];
}
if (! _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].branchData) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].branchData = {};
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].branchData['1'] = [];
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].branchData['1'][1] = new BranchData();
}
_$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].branchData['1'][1].init(18, 7, 'i >= 10');
function visit1_1_1(result) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].branchData['1'][1].ranCondition(result);
  return result;
}
_$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].lineData[1]++;
for (var i = 10; visit1_1_1(i >= 10); i--) {
  _$jscoverage['e:/code/my-lib/node-jscover/test/front-end/original-src/for.js'].lineData[2]++;
  x++;
}