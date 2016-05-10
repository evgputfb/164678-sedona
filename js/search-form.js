var link = document.querySelector(".btn-search-housing");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");

var arrive_date = popup.querySelector("[name=arrive-date]");
var leave_date = popup.querySelector("[name=leave-date]");
var adult_visitors = popup.querySelector("[name=adult-visitors]");
var children_visitors = popup.querySelector("[name=children-visitors]");

var arrive_date_bg = document.getElementById('arrive-date').style.background;
var leave_date_bg = document.getElementById('leave-date').style.background;
var adult_visitors_bg = document.getElementById('adult-visitors').style.background;
var children_visitors_bg = document.getElementById('children-visitors').style.background;


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
    document.getElementById('arrive-date').style.background = "red";
    window.setTimeout(SetNormalBackground,1000);
    return;
  };
  if (!leave_date.value) {
    event.preventDefault();
    document.getElementById('leave-date').style.background = "red";
    window.setTimeout(SetNormalBackground,1000);
    return;
  };
  if (!adult_visitors.value) {
    event.preventDefault();
    document.getElementById('adult-visitors').style.background = "red";
    window.setTimeout(SetNormalBackground,1000);
    return;
  };
  if (!children_visitors.value) {
    event.preventDefault();
    document.getElementById('children-visitors').style.background = "red";
    window.setTimeout(SetNormalBackground,1000);
    return;
  };
});


function SetNormalBackground() {
  document.getElementById('arrive-date').style.background = arrive_date_bg;
  document.getElementById('leave-date').style.background = leave_date_bg;
  document.getElementById('adult-visitors').style.background = adult_visitors_bg;
  document.getElementById('children-visitors').style.background = children_visitors_bg;
}
