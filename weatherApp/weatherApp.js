$(document).ready(function() {

  getLocation();

  function getLocation() {
    $.get("http://ipinfo.io", function(location) {
      $('#location')
        .html(location.city + ", " + location.country);

      var units = getUnits(location.country);
      getWeather(location.loc, units);

      //return weather;

    }, "jsonp");
  }

  function getUnits(country) {
    var imperialCountries = ['US', 'BS', 'BZ', 'KY', 'PW'];

    if (imperialCountries.indexOf(country) === -1) {
      var units = 'metric';
    } else {
      units = 'imperial';
    }

    return units;
  }

  function getWeather(loc, units) {
    lat = loc.split(",")[0] //.toString();
    lon = loc.split(",")[1] //.toString();

    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&units=" + units + '&appid=3c9d8a5d7e5933ca3111985a3d756cbf';

    $.get(weatherApiUrl, function(weather) {
      window.temperature = weather.main.temp; //globalize
      var unitLabel;

      //label based in imperial vs metric units
      if (units === "imperial") {
        unitLabel = "&deg;F";
      } else {
        unitLabel = "&deg;C";
      }

      // temperature = parseFloat((temperature).toFixed(1));

      $('#icon')
        .html("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");

      $('#value').html(temperature);
      $('#units').html(unitLabel);
      $('#description').html(weather.weather[0].description);

    }, "jsonp");

  }

  $("#units").on('click', function () {
    	var text = $('#units').html();
    	var temp = $('#value').html();
    	convertedTemp = temp * (9/5) + 32;
    	convertedTemp = parseFloat((convertedTemp).toFixed(1));
    	$('#value').html(temp == temperature ? convertedTemp : temperature);
       	$("#units").text(text == "°C" ? "°F" : "°C");
  });
});
