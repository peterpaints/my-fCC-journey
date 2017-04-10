function chunkArrayInGroups (arr, size) {
  // Break it up.
  var chunked = [];
  var temp = size;

  for (var i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, temp));
    temp += size; // <=== the key is here. This cannot be size += size.
    // so, store size in temp so that it increments by size only, and doesn't set size equal to a new value.
    // so i increases by size after every iteration, but we slice old temp and new temp. if that makes sense at all.
  }
  return chunked;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

// ==> OR
/*
function chunkArrayInGroups(arr, size) {
  // Break it up
  // It's already broken :(
  arr = arr.slice();
  var arr2 = [];
  for(var i = 0, len = arr.length; i < len; i+=size) {
    arr2.push(arr.slice(0, size));
    arr = arr.slice(size); // in stead of having a temp you increment by size,
    // how about you reduce the size of the array you're slicing by removing the parts already sliced away?
  }
  return arr2;
}

// OR


function chunkArrayInGroups (arr, size) {
  // Break it up.
  var chunked = [];
  // var temp = size;

  for (var i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i+size)); // ==> ha, instead of having a temp variable, like in my algo.
  }
  return chunked;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

// OR

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

// the above as a while loop!
*/
