// with a while loop

function destroyer (arr) {
  var args = Array.prototype.slice.call(arguments, 1); //returns 2, 3
  // or Array.from(arguments) then args.slice(1) or splice(0, 1)

  var i = 0;

  while (i < args.length) {
    var clean = arguments[0].filter(function (val) {
      return val !== args[i];
    });
    arguments[0] = clean; // <== this was the key, after every iteration (which removes only one args item), now filter through the new list, remove item 2 and so on.
    i++;
  }
  return clean;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// OR
/*
// with a for loop:

function destroyer (arr) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < args.length; i++) {
    var clean = arguments[0].filter(function (val) {
      return val !== args[i];
    });
    arguments[0] = clean; // <== this was the key, after every iteration (which removes only one args item), now filter through the new list, remove item 2 and so on.
  }
  return clean;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// OR

function destroyer (arr) {
  var args = Array.prototype.slice.call(arguments, 1);

  var clean = arr.filter(function(element) { // oh, you could just say return here, instead of storing in clean. And then you would not need return down below.
    return args.indexOf(element) === -1;
  });
  return clean;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// OR

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); //Outside of the nested loops: return the modified array using the Boolean object as a filter for any null's created by the delete operator.
}

// OR

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val); // return any val not included in args. Makes sense? I think args.includes(val) returns true. So if it returns false, return it. I think.
  });
}
*/
