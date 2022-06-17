$(function () {
  $("#button_one").click(function () {
    let one = $("#number_input").text();
    $("#number_input").text(one + "1");
  });
});
