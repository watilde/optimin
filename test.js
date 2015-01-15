var command = 'node test.js -a -c 123 --ddd 123'.split(' ');
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

if (argv.aaa !== true) throw new Error();
if (argv.bbb !== 123) throw new Error();
if (argv.ccc !== '123') throw new Error();
if (argv.ddd !== '123') throw new Error();
