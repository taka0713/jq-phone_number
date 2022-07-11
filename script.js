$(function () {
  let defaultSet = () => {
    if ($("#number_input").text() === "") {
      $(".delete").hide();
    } else {
      $(".delete").show();
    }
  };
  $(".phone_button").on("click", function () {
    if ($(this).data("id") !== "@") {
      $("#number_input").text($("#number_input").text() + $(this).data("id"));
    } else {
      alert($("#number_input").text() + "に電話をかけます。");
    }
    defaultSet();
  });
  $(".delete").on("click", function () {
    if ($(this).data("id") === "all") {
      $("#number_input").text("");
    } else {
      $("#number_input").text($("#number_input").text().slice(0, -1));
    }
    defaultSet();
  });
});
