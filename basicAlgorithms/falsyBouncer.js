// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer (arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
  // filter is usually like this: filter(function(val) {
    // return val < 6;
  // });
  // It expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value.
  // Hence we pass the built-in Boolean function.
}

console.log(bouncer([7, "ate", "", false, 9]));

// OR
/*
function bouncer (arr) {
  var truths = arr.filter(function (val) {
    return val;
    // return short form, without the === true.
    // meaning, return anything in arr, that is truthy. Discard the rest.
  });
  return truths;
}

console.log(bouncer([7, "ate", "", false, 9]));
*/
