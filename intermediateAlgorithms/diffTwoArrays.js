// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
function diffArray (arr1, arr2) {
  var newArr = [];
  // var i = arr2[1];
  // Same, same; but different.
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) {
      newArr.push(arr2[i]);
    }
  }
  for (var j = 0; j < arr1.length; j++) {
    if (arr2.indexOf(arr1[j]) < 0) {
      newArr.push(arr1[j]);
    }
  }
  return newArr;

}

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

// can also be re-written in a simpler way as:
/*
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
    for (var i=0;i<first.length;i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// or

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
} // pretty self eplanatory, this.

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// or

function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
} // like the above, only ... ah, figure it out.

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/
