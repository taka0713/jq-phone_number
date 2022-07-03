$(function () {
  $(".phone_de").hide();
  $(".phone_button").click(function () {
    $(".phone_de").show();
    if ($(this).data("id") !== "@") {
      $("#number_input").text($("#number_input").text() + $(this).data("id"));
    } else {
      alert($("#number_input").text() + "に電話をかけます。");
    }
  });
  $("#button_twelve").click(function () {
    $("#number_input").text(" ");
  });
  $("#button_thirty").click(function () {
    let sli = $("#number_input").text();
    let dele = sli.slice(0, -1);
    console.log(dele);
    $("#number_input").text(dele);
  });
});
