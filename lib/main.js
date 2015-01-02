function matchAll(arr, regexp) {
  var index = [];
  arr.forEach(function (val, i) {
    if (val.match(regexp) !== null) index.push(i);
  });
  return index;
}

module.exports = function (argv, opt) {
  var out = {};
  var short = matchAll(argv, /^-[A-Z]/i);
  var targets = [];
  short.forEach(function (index) {
    var short = argv[index].match(/^-[A-Z]/i)[0];
    Object.keys(opt).forEach(function (key){
      if (key === short) return;
      if (opt[key].alias === short) return;
    });
  });
  return out;
};
