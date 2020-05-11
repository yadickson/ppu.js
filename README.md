### ppu.js

[![TravisCI Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]

Utilitario de validacion para Placa Patente Unica Chilena

#### Installation

```
npm install --save ppu.js
```

#### Usage

```
const ppuJs = require('ppu.js')

console.log(ppuJs.carFormatValidator('aabb00')) // print true
console.log(ppuJs.carFormatValidator('ccbb00')) // print true

console.log(ppuJs.oldCarFormatValidator('aabb00')) // print true
console.log(ppuJs.oldCarFormatValidator('ccbb00')) // print true

console.log(ppuJs.newCarFormatValidator('aabb00')) // print false
console.log(ppuJs.newCarFormatValidator('ccbb00')) // print true

```

## License

MIT © [Yadickson Soto](https://github.com/yadickson)

[travis-image]: https://travis-ci.org/yadickson/ppu.js.svg?branch=master
[travis-url]: https://travis-ci.org/yadickson/ppu.js

[npm-image]: https://badge.fury.io/js/ppu.js.svg
[npm-url]: https://badge.fury.io/js/ppu.js
