const decimalRegex = /[\d+.]+/gm
const unitRegex = /[a-zA-Z]+/gm
const correctUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km']

function ConvertHandler() {
  this.getNum = function (input) {
    let decimal = input.match(decimalRegex);
    if (decimal === null) return 1;
    switch (decimal.length) {
      case 1: return parseFloat(decimal[0]);
      case 2: return parseFloat(decimal[0]) / parseFloat(decimal[1]);
      default: return 'invalid number';
    }
  };

  this.getUnit = function (input) {
    let result = input.match(unitRegex);
    if (result === null || !correctUnits.includes(result[0])) return 'invalid unit';
    return result[0];
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case 'gal': return 'L';
      case 'L': return 'gal';
      case 'lbs': return 'kg';
      case 'kg': return 'lbs';
      case 'mi': return 'km';
      case 'km': return 'mi';
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case 'gal': return 'gallons';
      case 'L': return 'liters';
      case 'lbs': return 'pounds';
      case 'kg': return 'kilograms';
      case 'mi': return 'miles';
      case 'km': return 'kilometers';
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case 'gal': return initNum * galToL;
      case 'L': return initNum / galToL;
      case 'lbs': return initNum * lbsToKg;
      case 'kg': return initNum / lbsToKg;
      case 'mi': return initNum * miToKm;
      case 'km': return initNum / miToKm;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  };

}

module.exports = ConvertHandler;
