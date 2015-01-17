module.exports = function (org, obj) {
  var out = {};
  Object.keys(org).forEach(function (key1) {
    out[key1] = org[key1];
    Object.keys(obj).forEach(function (key2) {
      out[key2] = obj[key2];
    });
  });

  return out;
};
