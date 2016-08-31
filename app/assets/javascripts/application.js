// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require react_bootstrap
//= require components
//= require_tree .

function init_map(){
  var myOptions = {zoom:18,center:new google.maps.LatLng(40.7061418,-74.00983819999999),mapTypeId: google.maps.MapTypeId.SATELLITE};
  map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(40.7061418,-74.00983819999999)});
  infowindow = new google.maps.InfoWindow({content:'<strong>Panda Potlach</strong><br>40 Wall Street<br>'});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  infowindow.open(map,marker);
}google.maps.event.addDomListener(window, 'load', init_map);
