const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
const { test } = require('mocha');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
   test('Whole number input', function(){
      assert.equal(convertHandler.getNum('32L'), 32);
      
   });
   test('Decimal number input', function(){
      assert.equal(convertHandler.getNum('32.2L'), 32.2);
   });
   test('Fractional input', function(){
      assert.equal(convertHandler.getNum('32/2L'), 16);
   });
   test('Fractional input with decimal', function(){
      assert.equal(convertHandler.getNum('32.2/2L'), 16.1);
   });
   test('No number input', function(){
      assert.equal(convertHandler.getNum('L'), 1);
   });
   test('Error on a double-fraction', function(){
      assert.equal(convertHandler.getNum('32/2/2L'), 'invalid number');
   });
   test('Get the correct unit', function(){
      assert.strictEqual(convertHandler.getUnit('32gal'), 'gal');
      assert.strictEqual(convertHandler.getUnit('32L'), 'L');
      assert.strictEqual(convertHandler.getUnit('32lbs'), 'lbs');
      assert.strictEqual(convertHandler.getUnit('32kg'), 'kg');

   });
   test('Error on an invalid unit', function(){
      assert.equal(convertHandler.getUnit('32'), 'invalid unit');
      assert.equal(convertHandler.getUnit('32gall'), 'invalid unit');

   });
   test('Get the correct return unit', function(){
      assert.equal(convertHandler.getReturnUnit('gal'), 'L');
      assert.equal(convertHandler.getReturnUnit('L'), 'gal');
      assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
      assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
      assert.equal(convertHandler.getReturnUnit('mi'), 'km');
      assert.equal(convertHandler.getReturnUnit('km'), 'mi');
   });
   test('Spell out the unit', function(){
      assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
      assert.equal(convertHandler.spellOutUnit('L'), 'liters');
      assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
      assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
      assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
      assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
   });
   

});   