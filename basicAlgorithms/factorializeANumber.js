function factorialize(num) {
  var factorial = 1; // factorial needs to be local to the function, so outside the while loop.

  while (num > 0) { // as long as we don't multiply by 0.
    factorial *= num;
    num -= 1; // ends each iteration to avoid infinity.
  }
  return factorial; // needs to be outside the loop but within the function.
}


factorialize(5);
