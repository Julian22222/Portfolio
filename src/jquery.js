import $ from "jquery";
// import timeOut from "jquery";

$(document).ready(function () {
  console.log("jQuery is working!");

  $(".menuBtn").click(function () {
    console.log("menuBtn clicked");

    var count = $(".NavBar_el").length; //4

    console.log(count);
  });
});
