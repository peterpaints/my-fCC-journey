function palindrome (str) {
  // Good luck!
  var re = /[\W_]/gi; // \W is the negation of shorthand \w for [A-Za-z0-9_] word characters (including the underscore)
  str = str.toLowerCase().replace(re, '');
  var reversedStr = str.split('').reverse().join('');

  // split('') '' with no space so that it splits every other letter and returns an array of them.
  // reverse() so that it reverses the array - we'll compare this mirror image to the original str.
  // join('') '' again with no space so that it joins the letters back into a word - a mirror image word.

  return str === reversedStr; // true or false
}

console.log(palindrome('almostomla'));
/*
// why doesn't the below work?

function palindrome (str) {
  // Good luck!
  var re = /[\W_]/gi; // \W is the negation of shorthand \w for [A-Za-z0-9_] word characters (including the underscore)
  str = str.toLowerCase().replace(re, '');

  for (var i = 0; i < str.length; i++) {
  // str.charAt(i) thing shows the actual characters at the specified index. But, like the guys on Gitter said, we don't need it.
    // return str.charAt(i) === str.charAt(str.length - 1 - i);
    return str[i] === str[str.length - 1 - i]; // the idea was to compare the letters from first to last, second to second last ...
    // ... and so on. However, the function ends up returning true every time it found a fit with the first and last letters.
    // e.g. with epalindrome, or almostomla. I don't know how to get it to check for EVERY letter. Doesn't a for loop do that?
    // why isn't it doing so here?
  }
  // apparently, replace your for loop with this:
  // for (var i = 0; i < str.length / 2; i++) {
    // if (str[i] !== str[str.length - 1 - i]) {
      // return false;
    // }
  // }
  // return true; - as always, return after the for loop.
  // the apparent Explanation: Half-indexing (len/2) has benefits when processing large strings.
  // We check the end from each part and divide the number of iterations inside the FOR loop by two.
  // As long as the characters from each part match, the FOR loop will go on - MAYBE this explains why my loop stopped the minute a couple characters matched!!!!!!
  // When the characters don't match anymore, false is returned and we exit the FOR loop
// }
console.log(palindrome('epalindrome'));
*/
