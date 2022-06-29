$(function () {
  $(".phone_button").click(function () {
    if (data - id !== "@") {
      let number_input = $("#number_input").text();
      $("#number_input").text(number_input + $(this).data("id"));
    } else {
      alert(number_input + "に電話をかけます。");
    }
  });
});
