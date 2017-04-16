
function convertHTML (str) {
  // &colon;&rpar;
  var re = /[<>&"']/g;
  var x = str.match(re);

  if (x) {
    x.forEach(function (el) {
      if (el === '&') {
        str = str.replace(el, '&amp;');
      } else if (el === '>') {
        str = str.replace(el, '&gt;');
      } else if (el === '<') {
        str = str.replace(el, '&lt;');
      } else if (el === '"') {
        str = str.replace(el, '&quot;');
      } else if (el === '\'') {
        str = str.replace(el, '&apos;');
      }
    });
  }
  return str;
}

console.log(convertHTML("Dolce&"));

/*
// OR

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

// OR

function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

// OR

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}

// OR

function convertHTML(str) {

 function repEnt(ent){
  switch(ent){
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case '"':
      return '&quot;';
    case "'":
      return "&apos;";
    }
 }
  str = str.replace( /[&<>"']/g, repEnt );
  return str;
}
*/
