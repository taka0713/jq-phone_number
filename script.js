$(function () {
  $(".phone_button").on("click", () => {
    $(this).data("id") !== "@"
      ? $("#number_input").text($("#number_input").text() + $(this).data("id"))
      : alert($("#number_input").text() + "に電話をかけます。");
  });
});
