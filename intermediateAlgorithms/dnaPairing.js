
function pairElement (str) {
  str = str.split('');
  var arr = [];

  str.forEach(function (elem) {
    if (elem === 'A') {
      arr.push(Array(elem, 'T'));
    } else if (elem === 'T') {
      arr.push(Array(elem, 'A'));
    } else if (elem === 'C') {
      arr.push(Array(elem, 'G'));
    } else if (elem === 'G') {
      arr.push(Array(elem, 'C'));
    }
  });
  return arr;
}

console.log(pairElement('GCG'));

// OR
/*
function pairElement(str) {
  //define a map object with all pair possibilities
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}

// OR

function pairElement(str) {

  return str.split("").map(function (el) {
    if (el === "A") {
      return ["A", "T"];
    } else  if (el === "T") {
      return ["T", "A"];
    } else if (el === "C") {
      return ["C", "G"];
    } else {
      return ["G", "C"];
    }
  });
}

// OR

function pairElement(str) {
  var pairs = {
    "A": ["A", "T"],
    "T": ["T", "A"],
    "C": ["C", "G"],
    "G": ["G", "C"]
  };

  return str.split("").map(function(elem) {
    return pairs[elem];
  });
}
*/
