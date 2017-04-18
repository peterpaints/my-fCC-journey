
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function (obj) {
    return obj[pre];
    // short form of
    // if (obj[pre]) {
      // return true;
    // }
    // return false;
  });

}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

/*
from the forum:
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// OR
// like mine, but with hasOwnProperty and the built in Boolean function.
function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// OR

// this taught me more about reduce.
// Set initial reduce value to true.
// Change it to false only when there is no key of a given name or it's falsy.
// Otherwise stick to the initial truthy value.
function truthCheck(collection, pre) {
  return collection.reduce(function(acc, next) {
    if (next[pre]) {
      return acc;
    }
    else {
      acc = false;
      return acc;
    }
  },true);
}

// OR
// exactly like mine but with an arrow function.
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every((obj) => obj[pre]);
}
*/
