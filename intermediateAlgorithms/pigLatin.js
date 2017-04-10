// this one doesn't work when the str has two consonants at its start.
/*
function translatePigLatin (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      str = str.slice(i + 1) + str[i];
      return str + "ay";
    } else if (vowels.indexOf(str[0]) >= 0) {
      return str + "way";
      break
    } else if (vowels.indexOf(str[i]) >= 0) {
      break
    }
  }
  return str;
}

console.log(translatePigLatin("chonsonant"));
*/
// but this one does:

function translatePigLatin (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  // if first letter is vowel ...
  if (vowels.indexOf(str[0]) >= 0) {
    return str + "way";
  }
  // let's loop now ... through the rest of 'em ...
  for (var i = 1; i < str.length; i++) {
    if (vowels.indexOf(str[i]) >= 0) {
      break;
    }
  }
  return str.slice(i) + str.slice(0, i) + "ay"; // I think the reason it's not in the for loop
  // is since once we hit a vowel, we want the loop to break, and then we slice from the vowel
  // index we've just hit, plus the letters before the vowel, plus 'ay'.
}

console.log(translatePigLatin("chonsonant"));

// similar to the above:
/*
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");

// this one works too:

function translatePigLatin (str) {
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(str[0]) !== -1) {
    str += "w";
  }
  while (vowels.indexOf(str[0]) === -1) {
    str = str.substr(1) + str[0]; // once we hit a vowel, the string will be 'onsonantch'
  }
  return str += "ay";
}
// test here
console.log(translatePigLatin("chonsonant"));

// a bit more complicated, but what the hell. Let's 'ave it!

function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");

// Code Explanation:

// This is a declarative as well as recursive approach to this problem.
// check() is a function which checks for first letter of string to be in the array of vowels, ['a','i','u','e','o'].
// In case of consonants, check() calls itself on the next characters until finding the first vowel.
// It'll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville's would be 3.
// Then, letters up until that index are removed from the string and concatenated with either
// that same chunk of removed string or w accordingly, and then ay regardless.

// and this one is pretty straightforward. Recursion is so counterintuitive, isn't it? I always think 'for' loops

function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char); // test returns a bool, while match returns an index.
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");
*/
