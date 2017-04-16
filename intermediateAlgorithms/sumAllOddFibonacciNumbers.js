
function sumFibs (num) {
  var arr = [1, 1];
  // the first 2 nums will always be ones
  for (var i = 1; arr[i] < num; i++) {
    arr.push(arr[i] + arr[i - 1]);
    // from index 1, add that and the previous one, iterating incrementally
    // creates an array of Fibs
  }
  return arr.filter(function(x) {
    if (x % 2 !== 0 && x <= num) {
      return x;
    }
    // filter out the evens and anything greater than num
  }).reduce(function(a, b) {
    return a + b;
  });
  // sum them
  // might be slow since it stores so many nums in memory, the array that is.
}

console.log(sumFibs(1));

/*
// OR

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        // 5, 8 and 13 (if they we didn't filter evens)
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// OR

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
      // since we're always working with the last two nums
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}
*/
