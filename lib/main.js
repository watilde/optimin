function indexOfAll(arr, elem) {
  var index = [];
  arr.forEach(function (val, i) {
    if (val.indexOf(elem) !== -1) index.push(i);
  });
  return index;
}

module.exports = function (opt) {
  var prepent = opt.prepent || '';;
  var append = opt.append || '';
  var usage = opt.usage || '';
  var examples = opt.examples || '';
  var help = opt.help || {
    name: 'help',
    alias: 'h',
    description: 'Display this message',
    validate: function (){},
  };
  var options = opt.options;
  var argv = process.argv;
  argv.splice(0, 2);
  var longs = indexOfAll(argv, '--');

  return {
    _: '',
    help: function (){}
  };
};
