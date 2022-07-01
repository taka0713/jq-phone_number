$(function () {
  $(".phone_button").click(function () {
    if ($(this).data("id") !== "@") {
      let number_input = $("#number_input").text();
      $("#number_input").text(number_input + $(this).data("id"));
    } else {
      alert($("#number_input").text() + "に電話をかけます");
    }
  });
});
