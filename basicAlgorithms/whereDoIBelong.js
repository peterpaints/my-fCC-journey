function getIndexToIns (arr, num) {
  // sort arr
  // if num is less than arr[i], return i
  // store that in temp.
  // sort temp
  // return temp[0]
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  var temp = [];

  for (var i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) { // for when num is equal to a num in array.
      temp.push(i);
    } else if (num > sortedArr[sortedArr.length - 1]) {
      return sortedArr.length; // for when num > the largest number in arr - it appears js has no for... else.
    }
  }
  return temp[0]; // no need to sort temp, I think, since the for loop iterates acc. to the order of sortedArr, no?
}

console.log(getIndexToIns([5, 2, 10], 15));

// OR
/*
// there are arrow functions in here:
// var materials = [
  // 'Hydrogen',
  // 'Helium',
  // 'Lithium',
  // 'Beryllium'
// ];

// var materialsLength1 = materials.map(function(material) {
  // return material.length;
// });

// var materialsLength2 = materials.map((material) => {
  // return material.length;
// });

// var materialsLength3 = materials.map(material => material.length);

function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next) // if curr, next (or a, b as I know it) is equivalent to a > b.
    .findIndex((currNum)=> num <= currNum); // The findIndex() method returns an index of the first element in the array that
    // satisfies the provided testing function. Otherwise -1 is returned.
  // Returns proper answer
  // could also be written as findIndex (function (currNum) {
                                  // return num <= currNum;
                                // });
  return index === -1 ? arr.length : index;
  // this is a ternary. If index is not found, (when it's larger than the largest num in arr), return arr.length, else, return index.
}

getIndexToIns([40, 60], 500);

// OR

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) {
      return parseInt(a); // parseInt: When an item on the array is greater than the number we are comparing against,
      // then we return the index as an integer.
      // ==> something tells me you can just return a without parseInt.
    }
  }
  return arr.length; //works like an else, if the loop ends, and no item on the array is greater.
}

// OR

function getIndexToIns(arr, num) {
  var times = arr.length;
  var count = 0;
  for (i=0;i<times;i++){
    if(num>arr[i]){
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);

// no sorting done, by the way.

// OR

function getIndexToIns(arr, num) {
  arr.push(num); // num is added in last position.
  arr.sort(function(a, b){
    return a-b;
  }); // sort in ascending order.
  return arr.indexOf(num); // return the postion or index of num in the array with the indexOf() function.
}

// the simplest by far. Ha!
*/
