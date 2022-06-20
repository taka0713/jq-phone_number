$(function () {
  $(".phone_button").click(function () {
    $("#number_input").text($("#number_input").text() + $(this).data("id"));
  });

  $("#button_call").click(function () {
    alert($("#number_input").text() + "に電話をかけます。");
  });
});

// $(".phone_button").click(function () {
//   $(this).data("id") !== "@"
//     ? $("#number_input").text($("#number_input").text() + $(this).data("id"))
//     : alert($("#number_input").text() + "に電話をかけます。");
// });
