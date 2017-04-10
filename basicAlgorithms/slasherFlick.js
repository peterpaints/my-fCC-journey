function slasher (arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany); // splice works by specifying a start, and how many items to be del'd. Including the one at the start.
  return arr;
}

console.log(slasher([1, 2, 3], 4));

// OR
/*
function slasher(arr, howMany) {

  // Return string after the amount chopped off.
  return arr.slice(howMany);

}
// remember how slice() works. by returning an array with the items preceding the argument removed. Not including the argument, I mean.
*/
