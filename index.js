var matchAll = require('./lib/matchAll');
var sortObject = require('./lib/sortObject');
var each = require('./lib/each');
var compat = require('./lib/compat');
var marge = require('./lib/marge');

module.exports = function (argv, opt) {
  var out = {};
  var short_list = matchAll(argv, /^-[A-Z]/i);
  var long_list = matchAll(argv, /^--[A-Z]/i);
  var targets = [];
  Object.keys(opt).forEach(function (key) {
    if (!opt[key].default) return;
    out[key] = opt[key].default;
  });

  short_list.forEach(function (index) {
    var short = argv[index];
    Object.keys(opt).forEach(function (key) {
      if (!opt[key]) return;
      if (short.indexOf('-' + opt[key].alias) === -1) {
        return;
      }
      if (opt[key].boolean === true) {
        out[key] = true;
        delete argv[index];
        return;
      }
      out[key] = argv[index + 1];
      delete argv[index];
      delete argv[index + 1];
      if (opt[key].typeof === 'number') out[key] = Number(out[key]);
    });
  });

  long_list.forEach(function (index) {
    var long = argv[index];
    Object.keys(opt).forEach(function (key) {
      if (!opt[key]) return;
      if (long.indexOf('--' + key) === -1) {
        return;
      }
      if (opt[key].boolean === true) {
        out[key] = true;
        delete argv[index];
        return;
      }
      out[key] = argv[index + 1];
      delete argv[index];
      delete argv[index + 1];
      if (opt[key].typeof === 'number') out[key] = Number(out[key]);
    });
  });
  argv = compat(argv);
  out = marge(out, {'_': argv})
  out = sortObject(out);

  return out;
};
