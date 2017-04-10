function repeatStringNumTimes (str, num) {
  // array to repeat str in
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(str);
  }
  return String(arr).replace(/[,]/g, ''); // just thought I'd use String() and replace() instead  of join().
}

console.log(repeatStringNumTimes("abc", 3));

// OR
/*
function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--; // once times hits 0, the loop stops.
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

// OR

function repeatStringNumTimes(string, times) {
  if(times < 0) // base case that stops the loop/recursion
    return "";
  if(times === 1) // what we shall call/recurse (haha)
    return string;
  else
    return string + repeatStringNumTimes(string, times - 1); // call it.
    // 1: abc + nothing - times = 3
    // 2: abc + nothing - times = 2
    // 3: abc           - times = 1
    // 4: ''            - times = 0
    // total = abc+abc+abc
}
repeatStringNumTimes("abc", 3);

// OR

function repeatStringNumTimes(string, times) {
  //Step 1. If times is positive, return the repeated string
  if (times > 0) {
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
    // ternary: times > 0 ? string.repeat(times) : ""; -> return this in function.
  } else { //Step 2. Else if times is negative, return an empty string
    return "";
  }
}
repeatStringNumTimes("abc", 3);

// OR

function repeatStringNumTimes (str, num) {
  return new Array(num + 1).join(str); // Array is a global constructor just like String() The 'new' is not necessary.
  // the join() converts an array into a string.
  // num + 1 explains itself. Or does it?
}

console.log(repeatStringNumTimes("abc", 3));
*/
