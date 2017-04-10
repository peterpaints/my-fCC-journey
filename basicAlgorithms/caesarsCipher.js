function rot13 (str) { // LBH QVQ VG! = you did it!
  // have an empty array named temp
  // loop through str, pushing to temp, the unicode for each letter.
  // loop throught temp, adding 13 to each unicode.
  // form a string from temp. Store it in tempCodesIntoLetters. Then join that into a str - it is an array.

  var temp = [];
  var tempCodesIntoLetters = [];

  for (var i = 0; i < str.length; i++) {
    temp.push(str.charCodeAt(i));
  }

  for (var i = 0; i < temp.length; i++) {
    if (temp[i] < 78 && temp[i] > 64) { // adding the > 64 and < 91 to 'pass on' spaces and punctuations as they are (unencoded).
      temp[i] += 13;
    } else if (temp[i] > 77 && temp[i] < 91) {
      temp[i] -= 13;
    }
    tempCodesIntoLetters.push(String.fromCharCode(temp[i])); // fromCharCode doesn't work with full strings/arrays.
    // So I thought, why not convert a single unicode at a time?
  }

  return tempCodesIntoLetters.join('');
}

// Change the inputs below to test
console.log(rot13('SERR PBQR PNZC'));

// OR
/*
function rot13 (str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map(function (char) {
      // Convert char to a character code
      var x = char.charCodeAt(0); // the 0 is unnecessary.
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      // N = ASCII 78, if the character code is less than 78, shift forward 13 places
      } else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

console.log(rot13('SERR PBQR PNZC'));

// OR

function rot13 (str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split('');
  for (var x in str) {
    if (regEx.test(str[x])) { // The test() method executes a search for a match between a regular expression and a specified string.
      // Returns true or false.
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
      // [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N]
      // [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z]
      // [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A]
      // [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B]
      // [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M]
    } else {
      rotCharArray.push(str[x].charCodeAt()); // if x is a space or punctuation.
    }
  }
  str = String.fromCharCode.apply(null, rotCharArray); // this method doesn't work on full strings or arrays, btdub.
  // Clever usage of apply allows you to use built-in functions for some tasks that otherwise probably
  // would have been written by looping over the array values. <== like I did. Just tested it in my solution, it works!
  // As an example here we are going to use Math.max/Math.min to find out the maximum/minimum value in an array.
  // var numbers = [5, 6, 2, 3, 7];
  // using Math.min/Math.max apply
  // var max = Math.max.apply(null, numbers);
  // This about equal to Math.max(numbers[0], ...)
  // or Math.max(5, 6, ...)
  return str;
}

// Change the inputs below to test
console.log(rot13('LBH QVQ VG!'));

// OR

function rot13 (str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

// the arrow function above stands for 'if equivalent to', I think. replaces function (L)
// return str.replace(/[A-Z]/g, function (L) {
  // return String.fromCharCode((L.charCodeAt(0) % 26) + 65));
// }); =>
// you don't need a for loop, since replace does so for every char that matches the regEx.
// [A]  65 % 26 ⇔ 13 + 65 =  78 [N]
// [M]  77 % 26 ⇔ 25 + 65 =  90 [Z]
// [N]  78 % 26 ⇔  0 + 65 =  65 [A]
// [O]  79 % 26 ⇔  1 + 65 =  66 [B]
// [Z]  90 % 26 ⇔ 12 + 65 =  77 [M]

console.log(rot13('SERR PBQR PNZC'));
*/
