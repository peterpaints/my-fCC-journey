
function dropElements(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      break; // so that the loop stops.
    }
  }
  return arr.slice(i); // from the index where the loop stopped.
}

console.log(dropElements([1, 2, 3, 7, 4, 3], function (n) { return n > 3; }));

/*
// OR
// my original solution, the above is still 100% mine, but it came after this one.
// and yeah, this one compared to the above is crap.
function dropElements(arr, func) {
  var x = [];
  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      x.push(arr[i]);
    } else {
      break; // so that the loop stops
    }
  }
  var y = arr.indexOf(x[x.length - 1]);
  return arr.slice(y + 1);
  // return x;
}

// these others as usual, are from the forum
// OR

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// OR

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
} // wait, why is arr.length repeated? I've tested it, and it works just fine if it isn't ...
// Use ES6 findIndex() function to find the index of the element that passes the condition
// Slice the array from the found index until the end
// if the condition is not met against any of the elements 'findIndex' will return -1
// which messes up the input to slice(). In this case use a simple conditional operator to return
// false instead of -1. And the ternary operator (?:slight_smile: returns the found index of
// required elements when the condition is true,
// and the length of the array otherwise so that the return value is an empty array as is instructed.

// OR

function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
// Use a while loop with Array.prototype.shift() to continue checking and dropping the first
// element of the array until the function returns true.
// It also makes sure the array is not empty first to avoid infinite loops.

// OR
// recursive
function dropElements(arr, func) {
  if (arr.length === 0 || func(arr[0])) {
  // base case to stop the recursion
    return arr;
  } else {
    arr.shift();
    return dropElements(arr, func);
    // in other words, keep shifting, until you hit one of the base cases.
  }
}
*/
