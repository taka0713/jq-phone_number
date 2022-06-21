$(function () {
  $("#button_one").click(function () {
    let one = $("#number_input").text();
    $("#number_input").text(one + "1");
  });
  $("#button_call").click(function () {
    let one = $("#number_input").text();
    alert(one + "に電話をかけます。");
  });

  $(".phone_button").click(function () {
    $("#").text("id") !== "@"
      ? $("#number_input").text()
      : alert("に電話をかけます。");
  });
});
