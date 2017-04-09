function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
titleCase("I'm a little tea pot");
// str[i].charAt(0).toUpperCase() returns the first letter only.
// so add it to the rest of the letters. that's what slice does, it slices from the index you give it to the end.

// OR
/*
function titleCase (str) {
  // var str = 'The quick brown fox jumped over the lazy dog';
  return str.toLowerCase().replace(/(^[a-z]| [a-z])/g, function (replaceEm) {
    return replaceEm.toUpperCase(); // replaceEm as an argument, stands for the regexp.
  });
}
// in the regexp, it can be thought of as two chars in which one is either the beginning of a line, or a space, and the other is a letter.
// console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('the quick brown fox jumped over the lazy dog'));

// OR

//use a map function. remember maps are like shortcut for loops.

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(strWithin) {
    return (strWithin.charAt(0).toUpperCase() + strWithin.slice(1));
  }).join(' ');
}
console.log(titleCase("I'm a little tea pot"));

// basically the same thing as the first function, but in a map.

// OR

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

// I tried this in a for loop, but got the 'replace' is not a function error.
// I suppose it works in a map then.
*/
