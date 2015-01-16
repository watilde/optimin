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
  }
});
console.log(argv);
```

then
```
$ node index.js
{ bbb: 123, aaa: true, ccc: 'hello', ddd: 'world' }
```
