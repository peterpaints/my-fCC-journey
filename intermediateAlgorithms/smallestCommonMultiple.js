function smallestCommons (arr) {
  arr.sort((a, b) => a > b);
  var range = [];
  var i = arr[0];
  while (i < arr[arr.length - 1] + 1) {
    range.push(i);
    i += 1;
  }
  // return range;
  var scm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(scm, range[i]);
    // the lcm is usually the product of the two nums, divvied by the gcd
    scm = (scm * range[i]) / GCD;
  }
  return scm;

  // this implements the Eucledian algo for GCD
  function gcd (a, b) {
    while (b !== 0) {
      var t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
}

console.log(smallestCommons([6, 9]));

/*
// OR

function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm, recursively
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
    // from wikipedia:
    // For illustration, the gcd(1071, 462) is calculated from the equivalent
    // gcd(462, 1071 mod 462) = gcd(462, 147). The latter GCD is calculated from the
    // gcd(147, 462 mod 147) = gcd(147, 21),
    // which in turn is calculated from the gcd(21, 147 mod 21) = gcd(21, 0) = 21.
}

// OR

function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }
    // this block is similar to the equivalent one above.
    return range.reduce(function(previousValue, currentValue) {
    var GCD = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / GCD;
    });

    function gcd(x, y) {
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}
*/
