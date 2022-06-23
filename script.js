$(function () {
  let button_delete;
  let defaultSet = () => {
    if ($("#number_input").text() === "") {
      $(".phone_de").hide();
    }
  };
  defaultSet();
  $(".phone_button").click(function () {
    $(".phone_de").show();
    if ($(this).data("id") !== "@") {
      $("#number_input").text($("#number_input").text() + $(this).data("id"));
    } else {
      alert($("#number_input").text() + "に電話をかけます。");
    }
  });
  $("#button_twelve").click(function () {
    $("#number_input").text("");
    defaultSet();
  });
  $("#button_thirty").click(function () {
    let number_delete = $("#number_input").text();
    let number_delete_one = number_delete.slice(0, -1);
    $("#number_input").text(number_delete_one);
    defaultSet();
  });
});
