/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('core-arbitrary-precision')(adapter);

Decimal = require('../src/')(Decimal);

describe('plus', function() {
  it('should add a given number', function() {
    new Decimal('3').minus(new Decimal('2')).toString().should.be.exactly('1');
  });
});
