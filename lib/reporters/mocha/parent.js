/* jshint undef: false, camelcase: false, evil: true, unused: false */

(function () {
  var OriginalReporter = mocha._reporter;
  var Parent = function (runner) {
    OriginalReporter.apply(this, arguments);
  };
  Parent.prototype = OriginalReporter.prototype;
  if (typeof module !== 'undefined') {
    module.exports = Parent;
  } else {
    mocha.reporter(Parent);
  }
})();