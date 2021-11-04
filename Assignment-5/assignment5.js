$(document).ready(function () {
  $("button").click(function () {
    var userType = $("#Values :selected").text();
    $("#abc").load("welcome.html", function (response, status, http) {
      if (status == "success") alert("Content loaded successfully!");
      if (status == "error")
        alert("Error: " + http.status + ": " + http.statusText);
    });

    if (userType == "Admin") {
     
      $("#userType").load("admin.html", function (response, status, http) {});
    } else {
     
      $("#userType").load("guest.html", function (response, status, http) {});
    }
  });
});



