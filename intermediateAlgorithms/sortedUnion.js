
function uniteUnique (arr) {
  var args = Array.from(arguments);
  var x = [];
  args.forEach(function (arg) {
    arg.map(function (i) {
      if (x.indexOf(i) < 0) {
        x.push(i);
      }
    });
  });
  return x;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// OR
/*
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// OR

function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;
}

// OR

function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// OR

//in ES2015

function uniteUnique(arr) {

  //make an array out of arguments and flatten it (using the spread operator)
  const args = [].concat(...arguments);

  // create a Set
  return [...new Set(args)];
}

*/
