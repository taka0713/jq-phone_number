$(function () {
  $(".phone_button").click(function () {
    let one = $("#number_input").text();
    $(this).text(one + );
  });

  // $("#button_two").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "2");
  // });

  // $("#button_three").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "3");
  // });

  // $("#button_four").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "4");
  // });

  // $("#button_five").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "5");
  // });

  // $("#button_six").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "6");
  // });

  // $("#button_seven").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "7");
  // });

  // $("#button_eight").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "8");
  // });

  // $("#button_nine").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "9");
  // });

  // $("#button_ten").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "*");
  // });

  // $("#button_zero").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "0");
  // });

  // $("#button_eleven").click(function () {
  //   let one = $("#number_input").text();
  //   $("#number_input").text(one + "#");
  // });

  $("#button_call").click(function () {
    let one = $("#number_input").text();
    alert(one + "に電話をかけます。");
  });
});
