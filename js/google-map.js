function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(34.777,-111.83)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  var myLatLng = new google.maps.LatLng(34.869,-111.80);
  var myMarker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
