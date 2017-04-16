
function booWho (bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof(bool) == 'boolean') {
    return true;
  } else {
    return false;
  }
  // return typeof(bool) == 'boolean'; // as a one liner
}

console.log(booWho(false));
