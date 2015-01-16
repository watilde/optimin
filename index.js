var matchAll = require('./lib/matchAll');
var sortObject = require('./lib/sortObject');
var each = require('./lib/each');

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
    var short = argv[index].match(/^-[A-Z]/i)[0];
    Object.keys(opt).forEach(function (key) {
      if (!opt[key]) return;
      if (short.indexOf('-' + opt[key].alias) === -1) {
        return;
      }
      if (opt[key].boolean === true) {
        out[key] = true;
        return;
      }
      out[key] = argv[index + 1];
      if (opt[key].typeof === 'number') out[key] = Number(out[key]);
    });
  });

  long_list.forEach(function (index) {
    var long = argv[index].match(/^--[A-Z]/i)[0];
    Object.keys(opt).forEach(function (key) {
      if (!opt[key]) return;
      if (long.indexOf('--' + opt[key].alias) === -1) {
        return;
      }
      if (opt[key].boolean === true) {
        out[key] = true;
        return;
      }
      out[key] = argv[index + 1];
      if (opt[key].typeof === 'number') out[key] = Number(out[key]);
    });
  });
  out = sortObject(out);

  return out;
};
