
function steamrollArray (arr) {
  // I'm a steamroller, baby
  return arr.reduce(function (a, b) {
    // If the new element is an Array itself call the function recursively to
    // flatten it before merging it with the rest of result
    return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
  }, []); // Pass an empty array to reduce as initial value to make sure
  // even the first element will be processed
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

// what's the base case here?
// the recursion will stop once there are no more arrays to call the function on.
// the base case is Array.isArray - once that no longer hits true for anything, reduce will return b, and
// terminate.

/*

// OR
// the base case is again, Array.isArray()
// if it is an array, loop through the non arrays inside it, and push
// once there are no more arrays to recurse on, the recursive calls will stop.
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// OR
// Use spread operator to concatenate each element of arr with an empty array
// We'd have used reduce instead.
// Use Array.some() method to find out if the new array contains an array still
// If it does, use recursion call steamrollArray again, passing in the new array to repeat
// the process on the arrays that were deeply nested
// If it does not, return the flattened array
// the base case is again Array.isArray()
// once there are no more arrays to concat, the recursive calls stop
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

// OR
// no recursion:
function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}

// OR
// also from the forum like all of the above:
// it's the same as another one above;
// the one above pushes elements if they aren't arrays
// and then for any arrays, calls the push function recursively on the array's elements
function steamrollArray(arr) {
  // Recursion is the breakfast of champions. ― Don Stewart
  var steamrolled = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var subArray = steamrollArray(arr[i]);
      steamrolled = steamrolled.concat(subArray);
    } else {
      steamrolled.push(arr[i]);
    }
  }
  return steamrolled;
}
*/
