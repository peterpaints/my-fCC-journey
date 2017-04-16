
function fearNotLetter (str) {
  var x = [];
  for (var i = 0; i < str.length; i++) {
    // if the gap between charCodes is > 1
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      // return the letter corresponding to the charCode that would have been in that gap
      x.push(String.fromCharCode(str.charCodeAt(i) + 1));
    }
  }
  // if there's no missing letter, nothing will have been pushed
  if (x.length === 0) {
    return undefined;
  }
  return String(x);
}

console.log(fearNotLetter("abce"));

// OR
/*
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    // code of current character
    var code = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration
    // hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {

      // if current character has escaped one character find previous char and return
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

// OR

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(l, i) {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

explanation:
First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
We turn the string to an array in order to map through it instead of using for and while loops.
As we map through our letters' character codes, we go comparing with the one that should be in that position.
If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
If there are no missing characters, return undefined.

  return missing;
}

// OR

function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g'); // ==> I don't understand this part fully, but I will soon.

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");

*/
