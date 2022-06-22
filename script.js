$(function () {
  // $(".phone_button").click(function () {
  //   if ($(this).data("id") !== "@") {
  //     $("#number_input").text($("#number_input").text() + $(this).data("id"));
  //   } else {
  //     alert($("#number_input").text() + "に電話をかけます。");
  //   }
  // });

  $(".phone_button").click(function () {
    $(this).data("id") !== "@"
      ? $("#number_input").text($("#number_input").text() + $(this).data("id"))
      : alert($("#number_input").text() + "に電話をかけます。");
  });
});
