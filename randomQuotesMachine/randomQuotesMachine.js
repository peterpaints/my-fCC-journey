$(document).ready(function() {
  newQuote();

 function newQuote () {
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp', // jsonp since it can be accessed cross-origin. json is restricted to same origin. With json, we wouldn't need this and the next line.
        dataType: "jsonp",
        data: {method: "getQuote", lang: "en", format: "jsonp"},
        success: function (response) {
        $('#actual-quote').html((response.quoteText));
        $('#author').html(('- ' + response.quoteAuthor));
      }
    });
 }

  $('#new-quote').on('click', function() {
    newQuote();
  });

  $('#tweet-quote').on('click', function() {
	var theQuote = $("#actual-quote").text();
    var theAuthor = $("#author").text();
	window.open('https://twitter.com/intent/tweet?text=' + theQuote + theAuthor);
    // window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(json.value.joke)); // or openURL() , no idea why this won't work.
  	});
});
