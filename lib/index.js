var argv = require('./main')(process.argv.slice(2), {
  aaa: {
    alias: 'a',
    boolean: true
  },
  bbb: {
    alias: 'b'
  },
  ccc: {
    alias: 'c'
  },
  ddd: {
    alias: 'd'
  }
});
