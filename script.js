$(function () {
  $(".phone_button").on("click", function () {
    $("#number_input").text($("#number_input").text() + $(this).data("id"));
    if ($("#number_input").text() === "") {
      $(".delete").hide();
    } else {
      $(".delete").show();
    }
  });
  $(".delete").on("click", function () {
    if ($(this).data("id") === "all") {
      $("#number_input").text("");
    } else {
      $("#number_input").text($("#number_input").text().slice(0, -1));
    }
  });
});
