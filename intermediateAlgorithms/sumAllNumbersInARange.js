// challenge: sum all numbers in a range.
// return min
// return max
// use a while loop with i initialized as min and the end as max
// push i to a newArr
// reduce or sum the new arr
function sumAll (arr) {
  var x = Math.max.apply(null, arr);
  var y = Math.min.apply(null, arr);

  var newArr = [];

  var i = y;
  while (i < x + 1) {
    newArr.push(i);
    i++;
  }

  var sum = newArr.reduce(function (a, b) {
    return a + b;
  }, 0); // works without the zero, btw. Odd.

  return sum;
}

console.log(sumAll([4, 1]));

// or
/*
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);

// or

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i; // spread operators work like apply(), allowing you to pass in the array itself, as opposed
        // to single nums.
    }
  return sum;
}

sumAll([1, 4]);
*/
