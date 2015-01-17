module.exports = function (obj1, obj2) {
  var out = {};
  Object.keys(obj1).forEach(function (key1) {
    out[key1] = obj1[key1];
  });
  Object.keys(obj2).forEach(function (key2) {
    out[key2] = obj2[key2];
  });

  return out;
};

