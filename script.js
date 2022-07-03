$(function () {
  let checkDisplayButton = () => {
    $("#number_input").text() === ""
      ? $(".phone_button_delete").hide()
      : $(".phone_button_delete").show();
  };
  $(".phone_button").on("click", () => {
    const target = $(this).data("id");
    target !== "@"
      ? $("#number_input").text($("#number_input").text() + target)
      : alert($("#number_input").text() + "に電話をかけます。");
    checkDisplayButton();
  });
  $(".delete").on("click", () => {
    $("#number_input").text(
      $(this).data("id") === "all" ? "" : $("#number_input").text().slice(0, -1)
    );
    checkDisplayButton();
  });
});
