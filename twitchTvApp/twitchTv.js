$(document).ready(function() {
  var streamUrl = 'https://wind-bow.gomix.me/twitch-api/streams/';
  var userUrl = 'https://wind-bow.gomix.me/twitch-api/users/';
  var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "medrybw"];
  // window.temp = {};

  streams.forEach(function(stream) {

    var temp = {};

    $.getJSON(streamUrl + stream + '?' + 'callback=?').success(function(json) {
      if (json.stream != null) {
        var title = json.stream.channel.status;
        temp.status = 'fa fa-play';
        if (title.length > 36) {
          title = title.substring(0,33);
          title += '...';
        }
        temp.title = title;
      } else {
        temp.status = 'fa fa-stop';
        temp.title = 'Not streaming';
      }

      $.getJSON(userUrl + stream + '?' + 'callback=?').success(function(json) {
        json.logo == undefined ? temp.logo = 'http://mscgroup.ro/wp-content/themes/constructii-utilaje/images/fara-poza.png' : temp.logo = json.logo;
        if (json.display_name == undefined) {
          temp.name = "'" + stream + "'" + " existeth not";
        } else {
          temp.name = json.display_name;
        }
        temp.username = stream;
        // console.log(temp);
        var allHTML = '<a href="https://twitch.tv/' + temp.username + '" target="_blank" id="link"><div class="stuff"><img src="' + temp.logo + '" class="img-responsive img-thumbnail"><h5 id="bla">' + temp.name + '</h5><p>' + temp.title + '</p><i class="' + temp.status + '"></i></div></a>';
        var onlineHTML = temp.status == 'fa fa-play' ? allHTML : '';
        var offlineHTML = temp.status == 'fa fa-stop' ? allHTML : '';
        $('#all').append(allHTML);
        $('#online').append(onlineHTML);
        $('#offline').append(offlineHTML);
      });
    });
  });

  $('#searchBar').keyup(function(event) {
    var search = $(this).val();
    $('.stuff').each(function(){
      var text = $(this).text().toLowerCase();
      (text.indexOf(search) != -1) ? $(this).show() : $(this).hide();
    });
  });
});
