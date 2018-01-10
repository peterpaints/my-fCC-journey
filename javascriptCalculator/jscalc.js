$(document).ready(function() {
  var calculations = [];
  var input = '';
  var output = '';

  $("button").on('click', function () {
    var val = $(this).text();
    input += val;
    $(".working").html(input);


  });
});
