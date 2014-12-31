var optimin = require('./main')({
  prepent: '', // default empty
  append: '',  // default empty
  usage: '',   // default empty
  examples: '', // default empty
  help: {}, // => default {} same with option prop
  options: [{
    name: 'count',
    alias: 'c',
    description: 'number of things',
    validate: function (){},
  }]
});
