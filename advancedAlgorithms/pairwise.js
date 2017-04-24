function pairwise(arr, arg) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    // we find any element that when added to arr[i] equals arg
    var x = arr.find((e) => e + arr[i] == arg);
    // we set arr[i] to undefined so that it can't be used again.
    // we can't set the element we 'found' to undefined, since we still need it
    // at this point.
    arr[i] = undefined;
    // make sure x is actually an element, and that indexOf returns a positive num
    if (x && arr.indexOf(x) > -1) {
      temp.push(i, arr.indexOf(x));
    }
    // now we can do away with x so that it's not used again.
    arr[arr.indexOf(x)] = undefined;
    // about if we get another pair with similar elements to those we have already used ...
    // we don't need to think about that, since our loop works from index 0, and it'll
    // always push the pair with the least indices first.
  }
  return temp.reduce((a, b) => a + b,0);
}

// console.log(pairwise([1,4,2,3,0,5], 7));
// console.log(pairwise([1, 3, 2, 4], 4));
// console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([], 2));

// Other Solutions from the forum:
/*
function pairwise(arr, arg) {
 // Set sum of indices to zero
 var sum = 0;
 // make a local copy of the arguments object so we don't modify it directly
 var pairArr = arr.slice();
 // looping from first element
 for(i = 0; i < pairArr.length; i++) {
   //Looping from second element by setting first element  constant
   for(j = i + 1; j < pairArr.length; j++) {
     // Check whether the sum is equal to arg
     if(pairArr[i] + pairArr[j] == arg) {
       //Add the indices
       sum += i + j;
       //Set the indices to NaN so that they can't be used in next iteration
       pairArr[i] = pairArr[j] = NaN;
     }
   }
 }
 return sum;
}

// OR

function pairwise(arr, arg) {
  // Create empty array to keep the arrays we will add.
  var index = [];

  // Loop to check the first number.
  for (var a in arr) {
    // temporal first number.
    var temp = arr[a];

    // Second loop to check against the first number.
    for (var i = 1; i < arr.length; i++) {
      // temporal second number.
      var temp2 = arr[i];

      // Key element, this check to make sure that the numbers add to arg
      // also that the second index is greater than the first, and that neither
      // of those indices are already on the array
        ==> that last point is very important, each element is used only once.
      if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        // if true then add both indices as integers then stop checking to avoid repeats.
        index.push(+a, +i);
        break;
      }
    }
  }

  // After the two loops are done, check if index is empty to return 0
  // or if it is not, then use Array.reduce(callbackFunc) to return the sum
  // of the numbers.
  if (index.length >= 1) {
    var addAll = function(a, b) {
      return a + b;
    };

    return index.reduce(addAll);
  } else
      return 0;
}

// OR

function pairwise(arr, arg) {
  // search array for elements that when paired, equal the second argument, then sum their indices
  // make a local copy of the arguments object so we don't modify it directly
  var pairArr = arr.slice();
  return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
  // a has been set to 0. It's the initial value of our cumulator
  // b is the current item
  // index is b's index.
      var search = arg - b; // get difference of current item so we know what value will sum to arg

      // check if search value in rest of the array, but also make sure it doesn't match current search index
      if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){
         var total = index + pairArr.indexOf(search);  // if found, add to the runnning total
         pairArr.splice(index,1,NaN); // remove current index from the array
         pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
         return a + total; //return the running total back to reduce for next item
      }
      return a; // simply return previous total if no operations needed
      // I don't think this is needed since if no ops are needed (i.e if arr is empty)
      // the initial value of a will be returned. i.e. 0
  },0);

}

and a very simple one:

function pairwise(arr, arg) {
    var result = 0;
  for(var x = 0 ; x <arr.length; x++){
    for(var y = 0; y <arr.length; y++){
      if(x === y){
        break;
     }
      if(arr[x] + arr[y] === arg){
        result += x + y;
        delete arr[x];
        delete arr[y];
      }
    }
  }
  return result;
}

and very similar to that:

function pairwiseRefactored2(arr, arg) {
 var sum = 0, pairArr = arr.slice(), len = pairArr.length, i, j;

 for(i = 0; i < len; i++) {
   for(j = i + 1; j < len; j++) {
     if(pairArr[i] + pairArr[j] == arg) {
       sum += i + j;
       //Set the indices to NaN so that they can't be used in next iteration
       pairArr[i] = pairArr[j] = NaN;
       break;
     }
   }
 }
 return sum;
}
*/
