$(document).ready(function() {
  $("#hamburger").click(function() {
    console.log('test');
    $(this).toggleClass("menu");
    $("#header-links").toggleClass("hidden");
  });
});
