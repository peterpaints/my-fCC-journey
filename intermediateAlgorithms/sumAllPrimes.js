
function sumPrimes (num) {
  // sieve of erastothenes
  var primeNumbers = [2];
  var sieve = [];
  for (var i = 0; i < num + 1; i++) {
    sieve.push(true);
  }
  for (i = 3; i < num + 1; i += 2) {
    if (sieve[i]) {
      primeNumbers.push(i);
    }
    for (var j = Math.pow(i, 2); j < num + 1; j += i) {
      sieve[j] = false;
    }
  }
  return primeNumbers.reduce(function (a, b) {
    return a + b;
  });
}

console.log(sumPrimes(23));

/*

// OR
// just like mine but no for loop for sieve
// and we don't go past sqrt of num when sieving.
// we do, however, when adding up.
function sumPrimes(num) {
  var sieve = new Array(num+1).fill(true);
  var maxCheck = Math.ceil(Math.sqrt(num));
  var i, j;
  var results = 0;

  for (i = 2; i <= maxCheck; i++) {
      if (sieve[i] === true) {
          for (j = i * i; j <= num; j += i) {
              sieve[j] = false;
          }
      }
  }

  for (i=2; i<=num; i++) {
      if (sieve[i]) results += i;
  }
  return results;
}

// OR
// another version of erastothenes
function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// OR
// for large nums, the array arr will be yuuuge! - or so I think.
function sumPrimes(num) {
  // step 1
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2);
  // step 2
  let onlyPrimes = arr.filter( (n) => {
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if ((n % m) === 0)
        return false;
        m--;
    }
      return true;
  });
  // step 3
  return onlyPrimes.reduce((a,b) => a+b);
}
*/
