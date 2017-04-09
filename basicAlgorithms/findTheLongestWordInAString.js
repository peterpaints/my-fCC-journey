function findLongestWord (str) {
  var letsSplitTheStr = str.toLowerCase().split(' '); // make everything lowercase, then split individual words (hence the space in ''), to an array.
  var lengthsOfWords = []; // we'll put our lengths here.

  for (var i = 0; i < letsSplitTheStr.length; i++) {
    lengthsOfWords.push(letsSplitTheStr[i].length); // pushing the length of each word to the new empty array. no need to 'return'.
  }

  lengthsOfWords.sort(function (a, b) {
    return b - a; // returns the lengths in descending order.
  });

  return lengthsOfWords[0]; // every function must have a return at the end ... we want the largest length.
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// solved this without referring anywhere. Ain't I that ninja!
