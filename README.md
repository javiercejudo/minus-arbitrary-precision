# minus-arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/minus-arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/minus-arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/minus-arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/minus-arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/minus-arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/minus-arbitrary-precision)

Subtraction abstraction for [core-arbitrary-precision](https://github.com/javiercejudo/core-arbitrary-precision/)

## Install

    npm i minus-arbitrary-precision

## Adapters

- See [adapters](https://www.npmjs.com/browse/keyword/core-arbitrary-precision-adapter)

## Usage

```js
var adapter = require('floating-adapter');
var CoreDecimal = require('linear-arbitrary-precision')(adapter);
var Decimal = require('minus-arbitrary-precision')(CoreDecimal);

new Decimal('3').minus(new Decimal('2')).valueOf(); // => 1
```

See [spec](test/spec.js).
