module.exports = function (obj) {
  var out = {};
  var ary = [];
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ary.push(key);
    }
  }
  ary.sort();
  for (var i = 0; i < ary.length; i++) {
    out[ary[i]] = obj[ary[i]];
  }
  return out;
};
