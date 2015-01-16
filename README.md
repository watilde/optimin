optimin
=======

A Library for parsing option and building cli

## Install
with npm
```
$ npm install --save optmin
```

## Usage
index.js
```js
var argv = require('optmin')(process.argv.slice(2), {
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
  },
  eee: {
    alias: 'e',
    typeof: 'number'
  }
});
console.log(argv);
```

then
```
$ node index.js -a -c hello --ddd world --eee 123
{ aaa: true, bbb: 123, ccc: 'hello', ddd: 'world', eee: 123 }
```
