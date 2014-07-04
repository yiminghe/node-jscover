if (! _$jscoverage['function.js']) {
  _$jscoverage['function.js'] = {};
  _$jscoverage['function.js'].lineData = [];
  _$jscoverage['function.js'].lineData[1] = 0;
  _$jscoverage['function.js'].lineData[4] = 0;
  _$jscoverage['function.js'].lineData[6] = 0;
  _$jscoverage['function.js'].lineData[10] = 0;
  _$jscoverage['function.js'].lineData[12] = 0;
  _$jscoverage['function.js'].lineData[14] = 0;
}
if (! _$jscoverage['function.js'].functionData) {
  _$jscoverage['function.js'].functionData = [];
  _$jscoverage['function.js'].functionData.index = [];
  _$jscoverage['function.js'].functionData[0] = 0;
  _$jscoverage['function.js'].functionData.index[0] = ['anonymous',2,9];
  _$jscoverage['function.js'].functionData[1] = 0;
  _$jscoverage['function.js'].functionData.index[1] = ['y',4,1];
  _$jscoverage['function.js'].functionData[2] = 0;
  _$jscoverage['function.js'].functionData.index[2] = ['q',7,8];
  _$jscoverage['function.js'].functionData[3] = 0;
  _$jscoverage['function.js'].functionData.index[3] = ['z.q',10,7];
  _$jscoverage['function.js'].functionData[4] = 0;
  _$jscoverage['function.js'].functionData.index[4] = ['z[q]',12,8];
  _$jscoverage['function.js'].functionData[5] = 0;
  _$jscoverage['function.js'].functionData.index[5] = ['z[\'q z\']',14,10];
}
if (! _$jscoverage['function.js'].branchData) {
  _$jscoverage['function.js'].branchData = {};
}
_$jscoverage['function.js'].lineData[1]++;
var z = 1, x = function () {
    _$jscoverage['function.js'].functionData[0]++;
  };
_$jscoverage['function.js'].lineData[4]++;
function y() {
  _$jscoverage['function.js'].functionData[1]++;
}
_$jscoverage['function.js'].lineData[6]++;
z = {
  q: function () {
    _$jscoverage['function.js'].functionData[2]++;
  }
};
_$jscoverage['function.js'].lineData[10]++;
z.q = function () {
  _$jscoverage['function.js'].functionData[3]++;
};
_$jscoverage['function.js'].lineData[12]++;
z[q] = function () {
  _$jscoverage['function.js'].functionData[4]++;
};
_$jscoverage['function.js'].lineData[14]++;
z['q z'] = function () {
  _$jscoverage['function.js'].functionData[5]++;
};