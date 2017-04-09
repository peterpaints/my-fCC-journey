function largestOfFour(arr) {
  var largestNums = [];

  for (var i = 0; i < arr.length; i++) {
    // sort each individual array, with largest number first.
    arr[i].sort(function (a, b) {
      return b - a;
    });
    // push each largest numbers to our array
    largestNums.push(arr[i][0]);
  }
  return largestNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Who's the man? No look, ha!

// OR
/*
function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
    return Math.max.apply(null, subArray);
  });
}

// The Math.max() function returns the largest of zero or more numbers, and we can pass any number of arguments.
// console.log(Math.max(4,5,1,3)); // logs 5
// But you can’t pass an array of numbers to the method like this​:
// var num = [4,5,1,3];
// console.log(Math.max(num)); // logs NaN
// This is where the apply() method turns out to be useful:
// var num = [4,5,1,3];
// console.log(Math.max.apply(null, num)); // logs 5
// Note that the first argument to apply() sets the value of ‘this’, not used in this method, so you pass null.
*/
