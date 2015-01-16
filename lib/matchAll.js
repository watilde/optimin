module.exports = function (arr, regexp) {
  var index = [];
  arr.forEach(function (val, i) {
    if (val.match(regexp) !== null) index.push(i);
  });
  return index;
};
