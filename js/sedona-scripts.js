var link = document.querySelector(".btn-search-housing");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");

var arrive_date = popup.querySelector("[name=arrive-date]");
var leave_date = popup.querySelector("[name=leave-date]");
var adult_visitors = popup.querySelector("[name=adult-visitors]");
var children_visitors = popup.querySelector("[name=children-visitors]");

var arrive_date_boxshadow = document.getElementById('arrive-date').style.boxShadow;
var leave_date_boxshadow = document.getElementById('leave-date').style.boxShadow;
var adult_visitors_boxshadow = document.getElementById('adult-visitors').style.boxShadow;
var children_visitors_boxshadow = document.getElementById('children-visitors').style.boxShadow;


link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("search-form-show")) {
    popup.classList.remove("search-form-show");
  } else {
    popup.classList.add("search-form-show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("search-form-show")) {
      popup.classList.remove("search-form-show");
    }
  }
});

form.addEventListener("submit", function(event) {
  if (!arrive_date.value) {
    event.preventDefault();
    document.getElementById('arrive-date').style.boxShadow = "inset 0 0 0 3px rgb(255,106,106)";
  };
  if (!leave_date.value) {
    event.preventDefault();
    document.getElementById('leave-date').style.boxShadow = "inset 0 0 0 3px rgb(255,106,106)";
  };
  if (!adult_visitors.value) {
    event.preventDefault();
    document.getElementById('adult-visitors').style.boxShadow = "inset 0 0 0 3px rgb(255,106,106)";
  };
  if (!children_visitors.value) {
    event.preventDefault();
    document.getElementById('children-visitors').style.boxShadow = "inset 0 0 0 3px rgb(255,106,106)";
  };
  window.setTimeout(ClearWarningShadows,1300);
});

function ClearWarningShadows() {
  document.getElementById('arrive-date').style.boxShadow = arrive_date_boxshadow;
  document.getElementById('leave-date').style.boxShadow = leave_date_boxshadow;
  document.getElementById('adult-visitors').style.boxShadow = adult_visitors_boxshadow;
  document.getElementById('children-visitors').style.boxShadow = children_visitors_boxshadow;
}

///////////////////////////////////////////////////////////////////////////////////////////
//
//  Для Google Maps
//

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

///////////////////////////////////////////////////////////////////////////////////////////
