
var Person = function(firstAndLast) {
  // firstAndLast = first + " " + last;
  var first = firstAndLast.split(' ')[0];
  var last = firstAndLast.split(' ')[1];

  this.setFirstName = function (newFirst) {
    first = newFirst;
  };
  this.setLastName = function (newLast) {
    last = newLast;
  };
  this.setFullName = function (newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  };
  this.getFirstName = function () {
    return first;
  };
  this.getLastName = function () {
    return last;
  };
  this.getFullName = function () {
    return firstAndLast;
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

// Tests failing:
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry")
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")

// this one worked though:

var Person = function(firstAndLast) {
  // firstAndLast = first + " " + last;
  var split = firstAndLast.split(' ');
  var first = split[0];
  var last = split[1];

  this.getFirstName = function () {
    return first;
  };
  this.getLastName = function () {
    return last;
  };
  this.getFullName = function () {
    return first + " " + last;
  };
  this.setFirstName = function (newFirst) {
    first = newFirst;
  };
  this.setLastName = function (newLast) {
    last = newLast;
  };
  this.setFullName = function (newFirstAndLast) {
    fullName = newFirstAndLast.split(' ');
    first = fullName[0];
    last = fullName[1];
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

// this too:


var Person = function(firstAndLast) {
  // firstAndLast = first + " " + last;
  var first = firstAndLast.split(' ')[0];
  var last = firstAndLast.split(' ')[1];

  this.setFirstName = function (newFirst) {
    first = newFirst;
  };
  this.setLastName = function (newLast) {
    last = newLast;
  };
  this.setFullName = function (newFirstAndLast) {
    first = newFirstAndLast.split(' ')[0];
    last = newFirstAndLast.split(' ')[1];
  };
  this.getFirstName = function () {
    return first;
  };
  this.getLastName = function () {
    return last;
  };
  this.getFullName = function () {
    return first + " " + last;
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

// it's wrong to reassign the object's main argument. I think that's what was wrong.

// One more. This one's from the forum. Uses ES6: let and arrow funcs.

var Person = function(firstAndLast) {
  let fullName;

  this.setFullName = (full) => {fullName = full.split(' ');};
  this.setFirstName = (first) => {fullName[0] = first;};
  this.setLastName = (last) => {fullName[1] = last;};

  this.setFullName(firstAndLast); // does the algo work if we remove this?
                                  // works, yes, but only if you replace 'let fullName' with 'let fullName = firstAndLast.split(' ')';
  this.getFullName = () => fullName.join(' ');
  this.getFirstName = () => fullName[0];
  this.getLastName = () => fullName[1];
};
