
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // formula for T:
  // http://www.dummies.com/education/science/physics/how-to-calculate-the-period-and-orb
  // iting-radius-of-a-geosynchronous-satellite/

  arr.forEach(function(obj) {
    var T = (2 * Math.PI) * (Math.sqrt((Math.pow(earthRadius + obj['avgAlt'], 3)) / GM));
    delete obj['avgAlt'];
    obj['orbitalPeriod'] = Math.round(T);
  });

  return arr;

}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

// I should have used dot notation, and wouldn't have needed the quotes.
/*
This one's from the forum: Uses map.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function(el){
    return {name:el.name,
            orbitalPeriod:Math.round((2*Math.PI)*Math.sqrt(Math.pow(earthRadius+el.avgAlt,3)/GM))
    }
  });
}
*/
