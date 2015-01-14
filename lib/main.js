function matchAll(arr, regexp) {
  var index = [];
  arr.forEach(function (val, i) {
    if (val.match(regexp) !== null) index.push(i);
  });
  return index;
}

function each(list, iteratee) {
  Object.keys(list).forEach(function (key) {
    iteratee(list[key], key);
  });
}

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
      if (opt[key].boolean === true) out[key] = true;
      out[key] = argv[index + 1];
    });
  });

  long_list.forEach(function (index) {
    var long = argv[index].match(/^--[A-Z]/i)[0];
    Object.keys(opt).forEach(function (key) {
      if (!opt[key]) return;
      if (long.indexOf('--' + opt[key].alias) === -1) {
        return;
      }
      if (opt[key].boolean === true) out[key] = true;
      out[key] = argv[index + 1];
    });
  });
  return out;
};
