
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// -----------------------------------------------------------------------
// object with 1 to 10?
function convertToRoman (num) {
  var converted = '';
  var roman = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  var x = num - ((Math.floor(num / 10)) * 10);
  var y = num > 100 ? num - ((Math.floor(num / 100)) * 100) - x : num - x;
  var z = num > 100 ? ((Math.floor(num / 100)) * 100) - ((Math.floor(num / 1000)) * 1000) : y;
  // var z = num > 100 ? ((Math.floor(num / 100))*100) : y;
  var zz = num > 1000 ? ((Math.floor(num / 1000)) * 1000) : z;

  if (roman.hasOwnProperty(num)) {
    converted += roman[num];
  } else if (num > 10 && num < 40) {
    converted += roman[10].repeat(Math.floor(y / 10)) + roman[x];
  } else if (num > 59 && num < 90) {
    converted += roman[50] + roman[10].repeat(Math.floor((y - 50) / 10)) + roman[x];
    // could making converted into an array and pushing to it with concat instead of plus, work? And then instead of
    // having a roman value for zero, we simply filter Boolean from converted?
  } else if (num > 100 && num < 400) {
    converted += roman[100].repeat(Math.floor(z / 100)) + convertToRoman(y) + roman[x];
  } else if (num > 400 && num < 500) {
    converted += convertToRoman(z) + convertToRoman(y) + roman[x];
  } else if (num > 500 && num < 900) {
    converted += roman[500] + roman[100].repeat(Math.floor((z - 500) / 100)) + convertToRoman(y) + roman[x];
  } else if (num > 900 && num < 1000) {
    converted += convertToRoman(z) + convertToRoman(y) + roman[x];
  } else if (num > 1000) {
    converted += roman[1000].repeat(Math.floor(zz / 1000)) + convertToRoman(z) + convertToRoman(y) + roman[x];
  } else {
    converted += convertToRoman(y) + roman[x];
  }
  return converted;
}

console.log(convertToRoman(2023));

// I took FOREVER writing that algo. FOREVER. Now look at this one, from the forum:
/*
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

convertToRoman(2036);
*/
// same idea could be used to convert numbers to words, no?
