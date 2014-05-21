_$jscoverage['/return.js'].branchData['3'][1].init(32, 5, 'x > f');
function visit10_3_1(result) {
    _$jscoverage['/return.js'].branchData['3'][1].ranCondition(result);
    return result;
}
_$jscoverage['/return.js'].branchData['2'][1].init(13, 5, 'x > 2');
function visit9_2_1(result) {
    _$jscoverage['/return.js'].branchData['2'][1].ranCondition(result);
    return result;
}
_$jscoverage['/return.js'].lineData[1]++;
(function () {
    _$jscoverage['/return.js'].functionData[0]++;
    _$jscoverage['/return.js'].lineData[2]++;
    return [visit9_2_1(x > 2)];
    _$jscoverage['/return.js'].lineData[3]++;
    return visit10_3_1(x > f) ? 1 : 2;
});
