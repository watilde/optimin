module.exports = function (list, iteratee) {
  Object.keys(list).forEach(function (key) {
    iteratee(list[key], key);
  });
};
