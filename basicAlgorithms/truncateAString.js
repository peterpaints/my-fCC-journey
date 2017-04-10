function truncateString (str, num) {
  // Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
  // Return the truncated string with a ... ending.
  // Note that inserting the three dots to the end will add to the string length.
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + '...';
  } else if (str.length <= num) {
    return str; // obviously, if str.length is less than or equal to num, don't truncate.
  } else {
    return str.slice(0, num) + '...';
  } // if the given maximum string length num is less than or equal to 3,
  // then the addition of the three dots does not add to the string length in determining the truncated string.
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 43));

// OR
/*
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

} // only diff with my algo is the location of the else if and else statements

// OR

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
} // with a ternary operator for the first if statement above, and the third one, again above.
*/
