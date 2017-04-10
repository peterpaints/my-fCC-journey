function confirmEnding (str, target) {
  var joinedStr = str.replace(/[\s+.]/g, ''); // as you know, \s matches any white spaces. Putting everything and a dot inside [] makes sure dots are also matches.
  var joinedTarget = target.replace(/[\s+.]/g, '');

  var x = joinedTarget.length;
  if (joinedStr.substr(-x) === joinedTarget) { // truth be told though, I didn't have to do the joining, but it was great learning this!
  // I could have used ternary: (str.substr(-target.length) === target) ? true : false; ==> return this in the function.
  // oh, and remember for booleans, you can just return the condition.
    return true;
  }
  return false;
}

console.log(confirmEnding("If you want to save our world", "country"));

// ANOTHER no look production!!!! Woo hoo!!!!!

//OR
/*
function confirmEnding(string, target) {
  // We return the endsWith method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n') // endsWith is case sensitive.
}
confirmEnding('Bastian', 'n');
*/
