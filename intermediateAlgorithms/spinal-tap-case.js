function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+_/g;

  // Replace any small letter followed by a capital with a space in btn them
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with - and make every letter lowercase
  return str.replace(regex, '-').toLowerCase();
}

/*
// OR

function spinalCase(str) {
  // Replace any small letter followed by a capital with a space in btn them
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split the string at one of the following conditions (converted to an array)
    // if a letter is followed by an underscore or space ==> .split(/(?:_| )+/)
  return str.toLowerCase().split(/(?:_| )+/).join('-');
}

// OR

function spinalCase(str) {
  // Split the string at one of the following conditions (converted to an array)
  // a whitespace character [\s] is encountered
  // underscore character [_] is encountered
  // or is followed by an uppercase letter [(?=[A-Z])]
  // Join the array using a hyphen (-)
  // Lowercase the whole resulting string
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  // I think we use : for when we're checking if a letter is followed by one or more chars,
  // and = for when it's followed by just the one.
  // OR
  return str.replace(/([a-z])([A-Z])|[_|\s]+/g, '$1-$2').toLowerCase()
  // this is a one-liner. Already explained by other examples.
}
*/
