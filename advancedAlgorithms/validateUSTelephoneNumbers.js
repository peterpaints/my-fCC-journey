
function telephoneCheck(str) {
  // Good luck!
  var re = /[^(\d)\s-]|\)$/g;
  var re2 = /[\(\)]/g;
  var r = str.match(re2);

  var rl = r === null ? 0 : r.length;

  var x = str.match(re);
  var clean = str.replace(re, '');
  var y = clean.split('').filter((e) => e !== '(' & e !== ')' & e !== '-' & e !== ' ');
  var z = clean.split('').filter((e) => e !== '(' & e !== ')' & e !== ' ');

  if (x !== null) {
    return false;
  } else  if (rl > 0 && rl % 2 !== 0){
    return false;
  } else if (y.length < 10 || y.length > 11){
    return false;
  } else if (y.length === 11 && z[0] !== '1') {
    return false;
  } else {
    return true;
  }

  // Woah, just checked out the examples on the forum.
  // I really really need to brush up on my Regex skills. Damn!
}

console.log(telephoneCheck("1 555-555-5555"));

/*
// from the forum:
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}

// ^ denotes the beginning of the string (1\s?)? checks allows for a "1" or a "1 " at the beginning.
// \d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that
// are allowed to be between parenthesis.
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ denotes the end of the string. In this case the beginning and end of the string are used in the regex
// to prevent it from matching any longer string that might contain a valid
// phone number (eg. "s 555 555 5555 a").
// Lastly we use regex.test(str) to test if the string adheres to the regular expression and
// return true or false.

// this is a MONSTER:
function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8]
  [02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|
  [2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}
// I'll figure this out later.
// As I check out this phone validation library: https://github.com/googlei18n/libphonenumber
*/
