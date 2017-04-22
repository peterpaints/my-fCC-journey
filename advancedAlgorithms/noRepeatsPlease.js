/*
Turns out I didn't understand the question at all.

Turns out there's a way to generate an array of all possible permutations of str.length elements.
https://en.wikipedia.org/wiki/Heap%27s_algorithm

The we use regex to check filter out those with a repeating letter.

Here's the explanation from regex101.com:
/
(.)\1+
/
g
1st Capturing Group (.)
. matches any character (except for line terminators)
\1+ matches the same text as most recently matched by the 1st capturing group
+ Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)

So here it is:

function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

*/

// My solution. Doesn't work. Forum wiki saved me.
function permAlone(str) {
  var re = /\w/g;
  var letters = str.match(re);
  var uniques = letters.filter((e, i, a) => i === a.indexOf(e));
  var n = uniques.length;
  var r = letters.length;
  var factorial = function (num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  };

  // How many ways can we pick r letters from uniques, with or without repetition:
  // (r + n - 1)! / r!(n - 1)!
  var withOrWithoutRep = factorial(r + n - 1) / (factorial(r) * factorial(n - 1));

  // subtracting the instances where one letter is repeated r times:
  // return withOrWithoutRep - n;
}

console.log(permAlone('aab'));

// How many ways can we pick r letters from uniques, without repetition:
// n! / r!(n - r) !
// var withoutRep = factorial(n) / (factorial(r) * factorial(n - r));
