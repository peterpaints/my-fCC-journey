
function findElement(arr, func) {
  var filtered = arr.filter(function (a) {
    if (func(a) === true) {
      return a;
    }
  });
  return filtered[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

/*
// OR
// way simpler, and with no redundant lines
function findElement(arr, func) {
  //filter array with the function provided
  var filtered = arr.filter(func);

  return filtered[0];
}

// OR
// one liner
function findElement( arr , func ) {
     return arr.filter(func)[0];
}

// OR
// instead of the [0], use shift - removes first elem from array, and logs it.
function findElement(arr, func) {
  return arr.filter(func).shift();
}

// OR
// with find()
function findElement(arr, func) {
  return arr.find(func);
}
*/
