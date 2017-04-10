// return true if all of str 2's letters are in str 1. Ignoring case, since indexOf is case sensitive.

function mutation (arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase(); // tryna get indexOf to ignore case.

  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1].charAt(i)) === -1) { // could also use < 0
      return false; // if you use !== like the mozilla page insists, then return true if it is, the loop stops the instant any letter returns a 'true' hit.
    }
  }
  return true;
}

console.log(mutation(["Mary", "Army"]));

// OR
/*
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

// summary: Grab the second string, lowercase and turn it into an array[SPLIT];
// then make sure every one of its letters is a part of the lowercased first string [EVERY].

// function isBigEnough(element, index, array) {
//   return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough);   // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true
*/
