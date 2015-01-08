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
  var short = matchAll(argv, /^-[A-Z]/i);
  var long = matchAll(argv, /^--[A-Z]/i);
  var targets = [];
  Object.keys(opt).forEach(function (key) {
    if (!opt[key].default) return;
    out[key] = opt[key].default;
  });
  short.forEach(function (index) {
    var short = argv[index].match(/^-[A-Z]/i)[0];
    Object.keys(opt).forEach(function (key) {
      if (!opt[key]) return;
      if (short.indexOf('-' + opt[key].alias) === -1) {
        return;
      }
      out[key] = true;
    });
  });
  return out;
};
