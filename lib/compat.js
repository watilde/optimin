module.exports = function (ary) {
  var out = [];

  ary.forEach(function (item) {
    if (item === null) return;
    out.push(item);
  });

  return out;
};
