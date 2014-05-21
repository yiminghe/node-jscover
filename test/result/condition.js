_$jscoverage['/condition.js'].branchData['4'][1].init(38, 5, 'x > t');
function visit4_4_1(result) {
    _$jscoverage['/condition.js'].branchData['4'][1].ranCondition(result);
    return result;
}
_$jscoverage['/condition.js'].branchData['3'][1].init(29, 5, 'q > z');
function visit3_3_1(result) {
    _$jscoverage['/condition.js'].branchData['3'][1].ranCondition(result);
    return result;
}
_$jscoverage['/condition.js'].branchData['2'][1].init(22, 5, 'q > w');
function visit2_2_1(result) {
    _$jscoverage['/condition.js'].branchData['2'][1].ranCondition(result);
    return result;
}
_$jscoverage['/condition.js'].branchData['1'][1].init(3, 5, 'x > y');
function visit1_1_1(result) {
    _$jscoverage['/condition.js'].branchData['1'][1].ranCondition(result);
    return result;
}
_$jscoverage['/condition.js'].lineData[1]++;
x = visit1_1_1(x > y) ? 1 : 2;
_$jscoverage['/condition.js'].lineData[2]++;
z = visit2_2_1(q > w);
_$jscoverage['/condition.js'].lineData[3]++;
visit3_3_1(q > z);
_$jscoverage['/condition.js'].lineData[4]++;
x(visit4_4_1(x > t));