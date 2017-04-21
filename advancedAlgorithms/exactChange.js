
function checkCashRegister (price, cash, cid) {
  var change = cash - price;
  // let's use a different variable for the for loop that calcs 'due' so that change
  // doesn't change - we need to compare it in the return statement down below.
  changeforloop = change;

  var due = []; // will be the array returned by the function.
  var words = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
  var max = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  var numbers = [];
  // [ 100, 60, 20, 55, 90, 4.25, 3.1, 2.05, 1.01 ] change = 96.74

  for (var i = 0; i < words.length; i++) {
    var xx = cid.find((a) => a.indexOf(words[i]) >= 0);
    numbers.push(xx[1]);
  }

  // in this for loop, we iterate over max and words.
  // each time subtracting max from change, and pushing the equivalent max value to 'due'
  // once we can no longer push the equivalent max value, because what's in the drawer for that
  // currency is exhausted, i.e once we hit numbers == 0, we move on to the next currency value.
  // that's why whenever we push something to due, we reduce numbers[i].
  for (var i = 0; i < numbers.length; i++) {
    while (max[i] <= changeforloop && numbers[i] > 0) {
      // this if statement ensures we don't recreate a new array every time
      // we push to due. If an array with that word exists, simply increment its
      // number value
      if (due.some((a) => a.indexOf(words[i]) >= 0)) {
        var x = due.find((a) => a.indexOf(words[i]) >= 0);
        x[1] += max[i];
      } else {
        due.push([words[i], max[i]]);
      }
      // without this, after so many iterations, change kept not being rounded.
      changeforloop = Number(changeforloop.toFixed(2));
      changeforloop -= max[i];
      numbers[i] -= max[i];
    }
  }

  var totalCid = cid.reduce(function (a, b) {
    return a.concat(b).filter((e) => typeof (e) === 'number');
  }, []).reduce((a, b) => a + b);

  var totalDue = due.reduce(function (a, b) {
    return a.concat(b).filter((e) => typeof (e) === 'number');
  }, []).reduce((a, b) => a + b);

  // totalCid = Math.round((totalCid + 0.00001) * 100) / 100;
  totalCid = Number((Math.round((totalCid * 1000) / 10) / 100).toFixed(2));
  totalDue = Number((Math.round((totalDue * 1000) / 10) / 100).toFixed(2));

  if (totalDue < change) {
    return "Insufficient Funds";
  } else if (totalCid === change) {
    return "Closed";
  } else {
    return due;
  }
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
["ONE", 0.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

/*
//  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Now for the forum examples:

// Create an object which hold the denominations and their values
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  // register looks like this:
  // { total: 335.40999999999997,
  // PENNY: 1.01,
  // NICKEL: 2.05,
  // DIME: 3.1,
  // QUARTER: 4.25,
  // ONE: 90,
  // FIVE: 55,
  // TEN: 20,
  // TWENTY: 60,
  // 'ONE HUNDRED': 100 }

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    //reduce is acting like a for loop.
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      // curr.val is like my max[i]
      // register[curr.name] is like my numbers[i]
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
      // I had this same problem too.
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds"; // I could have used this in my solution instead of
    // having a totalDue variable
  }

  // Here is your change, ma'am.
  return change_arr;
}

// test here
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00],
["ONE HUNDRED", 100.00]]));

// OR

function checkCashRegister(price, cash, cid) {
  // All amounts are multiplied by 100 until the final result to avoid errors with floating point math
  const denominations = { "PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000 }
  let changeDue = (cash * 100 - price * 100);
  const register = cid.reverse().map(el => [el[0], Math.round(el[1]*100)]);
  const registerTotal = register.reduce((sum, elem) => (sum + elem[1]), 0);

  if (changeDue > registerTotal ) return "Insufficient Funds";
  if (changeDue === registerTotal ) return "Closed";

  let partial;
  let change = register.reduce((acc, elem) => {
        // for each denomination calculate the lesser of (a) the amount that could be paid with that
        // denomination without going over the amount owed, and (b) the actual amount of that denomination in
        // the register. Denominations not used to make change are excluded from the resulting array.
        partial = Math.min(elem[1], Math.floor(changeDue / denominations[elem[0]]) * denominations[elem[0]]);
        if ( partial > 0 ) {
          changeDue -= partial;
          acc.push([elem[0], partial / 100]);
        } return acc;
    }, [])

  // If the correct change could not be made from what was in the register.
  if (changeDue > 0 ) return "Insufficient Funds"

  return change;
}
*/
