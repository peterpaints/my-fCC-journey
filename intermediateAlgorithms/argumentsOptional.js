
function addTogether () {
  var args = Array.from(arguments);
  var x = args.every((e) => typeof (e) === 'number'); // every logs true or false
  if (!x) {
    return undefined;
  } else {
    if (args.length > 1) {
      return args.reduce(function (a, b) {
        return a + b.isFi;
      }, 0);
    } else {
      return function (a) {
        if (typeof (a) === 'number') {
          return args.concat(a).reduce(
          (a, b) => a + b, 0
          );
        }
      };
    }
  }
}

console.log(addTogether(2, 3));

/*
// OR

function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// OR

function addTogether() {
  // create an array
  var args = new Array(arguments.length);
  // Populating the array
  for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
 //Check for the arguments length
 if(args.length == 2){
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
      return undefined;
      }
    return args[0]+args[1];
   }
 //When only one argument is provided
 if(args.length == 1){
     a= args[0];
     //Check the  argument using typeof
    if(typeof a!=='number'){
        return undefined;
      }
    else{
       //Making use of closures
       return function(b){
       //Checking the second argument
         if(typeof b !=='number'){
           return undefined;
           }
         else
           return a+b;
          };
      }
    }
}

// OR
// making extensive use of ternary ops.
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? // some is like a cousin of every - logs true and false too.
    undefined:
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ?
        n + args[0]:
        undefined;
}

// OR

function addTogether(a, b) {
  // only if valid number provided
  if (Number.isFinite(a)) { // this method checks if the arg is a number. - is finite.
    if (!b) { // if there's one argument only.
      return function(c) { // our closure
        if (Number.isFinite(c)) {
          return a + c;
        }
      };
    }
    else if (Number.isFinite(b)) {
      return a + b;
    }
  }
  // returns undefined by default
}

// OR

function addTogether() {
  //Variable and subroutine declaration (optional, but makes code cleaner)
  var args = arguments;
  var a = args[0];
  var b = args[1];
  function isNum(num) {
    return Number.isInteger(num);
  }

  //Actual program: relies on implicit return of 'undefined'
  //Note: while refactoring I remove curly braces if not required
  if (isNum(a)) {
    if (isNum(b))
      return a + b;
    else if (!b)
      return function(b) {
        if (isNum(b))
          return a + b;
      };
  }
}
*/
