function whatIsInAName (collection, source) {

  var sourceKeys = Object.keys(source);

  var arr = collection.filter(function (obj) {
    for(var i = 0; i < sourceKeys.length; i++) {
      if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}
/*
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
// { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// I can understand how it works, but, I mean, why doesn't this work?

function whatIsInAName (collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  for (var j = 0; j < collection.length; j++) {
    for (var i = 0; i < sourceKeys.length; i++) {
      if (collection[j].hasOwnProperty(sourceKeys[i]) && collection[j][sourceKeys[i]] === source[sourceKeys[i]]) {
        arr.push(collection[j]);
      }
    }
  }
  return arr;
}

// this one does though:

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// I understand that one completely.
*/
