// Reverse a string.

function reverseString (str) {
  var strAsArray = [];
  var reversedStrArray = '';

  for (var i = 0; i < str.length; i++) {
    strAsArray.push(str.charAt(i)); // this str.charAt(i) thing works like a charm for accuracy. Better than push(i) only (which actually pushes weird numbers as opposed to the actual characters at the specified index.)
  } // again, shita ni dot not

  reversedStrArray = strAsArray.reverse(); // having this as part of the for loop doesn't work, actually returns an unordered array.

  var reversedStr = reversedStrArray.join('');

  return reversedStr;
}

console.log(reverseString('Greetings from Earth'));

// OR
/**
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { // you want the loop to start at the last character, to the second last, etc.
        newString += str[i]; // you don't have to push since newString is not an array.
    }
    return newString;
}
console.log(reverseString('hello'));

// this algo doesn't use the built in reverse method.

// OR

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");
*/
