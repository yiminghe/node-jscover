if (! _$jscoverage['/if.js']) {
  _$jscoverage['/if.js'] = {};
  _$jscoverage['/if.js'].lineData = [];
  _$jscoverage['/if.js'].lineData[1] = 0;
  _$jscoverage['/if.js'].lineData[2] = 0;
  _$jscoverage['/if.js'].lineData[3] = 0;
  _$jscoverage['/if.js'].lineData[5] = 0;
  _$jscoverage['/if.js'].lineData[6] = 0;
  _$jscoverage['/if.js'].lineData[8] = 0;
  _$jscoverage['/if.js'].lineData[11] = 0;
}
if (! _$jscoverage['/if.js'].functionData) {
  _$jscoverage['/if.js'].functionData = [];
  _$jscoverage['/if.js'].functionData[0] = 0;
}
if (! _$jscoverage['/if.js'].branchData) {
  _$jscoverage['/if.js'].branchData = {};
  _$jscoverage['/if.js'].branchData['2'] = [];
  _$jscoverage['/if.js'].branchData['2'][1] = new BranchData();
  _$jscoverage['/if.js'].branchData['2'][2] = new BranchData();
  _$jscoverage['/if.js'].branchData['2'][3] = new BranchData();
  _$jscoverage['/if.js'].branchData['6'] = [];
  _$jscoverage['/if.js'].branchData['6'][1] = new BranchData();
  _$jscoverage['/if.js'].branchData['8'] = [];
  _$jscoverage['/if.js'].branchData['8'][1] = new BranchData();
}
_$jscoverage['/if.js'].branchData['8'][1].init(8, 8, 'x1 <= y1');
function visit15_8_1(result) {
  _$jscoverage['/if.js'].branchData['8'][1].ranCondition(result);
  return result;
}
_$jscoverage['/if.js'].branchData['6'][1].init(9, 1, '2');
function visit14_6_1(result) {
  _$jscoverage['/if.js'].branchData['6'][1].ranCondition(result);
  return result;
}
_$jscoverage['/if.js'].branchData['2'][3].init(19, 6, 'y1 < 1');
function visit13_2_3(result) {
  _$jscoverage['/if.js'].branchData['2'][3].ranCondition(result);
  return result;
}
_$jscoverage['/if.js'].branchData['2'][2].init(9, 6, 'x1 > 1');
function visit12_2_2(result) {
  _$jscoverage['/if.js'].branchData['2'][2].ranCondition(result);
  return result;
}
_$jscoverage['/if.js'].branchData['2'][1].init(9, 16, 'x1 > 1 && y1 < 1');
function visit11_2_1(result) {
  _$jscoverage['/if.js'].branchData['2'][1].ranCondition(result);
  return result;
}
_$jscoverage['/if.js'].lineData[1]++;
function x(x1, y1) {
  _$jscoverage['/if.js'].functionData[0]++;
  _$jscoverage['/if.js'].lineData[2]++;
  if (visit11_2_1(visit12_2_2(x1 > 1) && visit13_2_3(y1 < 1))) {
    _$jscoverage['/if.js'].lineData[3]++;
    x1++;
  } else {
    _$jscoverage['/if.js'].lineData[5]++;
    y1++;
  }
  _$jscoverage['/if.js'].lineData[6]++;
  if (visit14_6_1(2)) {
  }
  _$jscoverage['/if.js'].lineData[8]++;
  if (visit15_8_1(x1 <= y1)) {
  }
  _$jscoverage['/if.js'].lineData[11]++;
  return {
    x: x1,
    y: y1
  };
}