var command = 'node test.js -a -c hello --ddd world'.split(' ');
var argv = require('./')(command.slice(2), {
  aaa: {
    alias: 'a',
    boolean: true
  },
  bbb: {
    alias: 'b',
    default: 123
  },
  ccc: {
    alias: 'c'
  },
  ddd: {
    alias: 'd'
  }
});

console.log(argv);

if (argv.aaa !== true) throw new Error();
if (argv.bbb !== 123) throw new Error();
if (argv.ccc !== 'hello') throw new Error();
if (argv.ddd !== 'world') throw new Error();
