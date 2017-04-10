// or $(function() {
$(document).ready(function() {
  $('#search').keyup(function(event) {

    var search = $('#search').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?";
    $.getJSON(url, function(data) {
      var items = [];
      for (i = 0; i < data[1].length; i++) {
        items.push('<div class="list-group well">'+'<a href="'+ data[3][i] +'" target="_blank" class="list-group-item" id="' + i + '">'+'<h3>'+ data[1][i] +'</h3>'+'<p>'+ data[2][i] +'</p>'+'</a>'+'</div>');
      }
      // get only as opposed to getJSON doesn't work.
      // &callback=? converts JSON to 'jsonp' perhaps?
      $('#myWiki').html(items.join(""));
    });

    if (search == '') {
      $('#myWiki').html('');
    }

  });

  $('#random').click(function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });

});
