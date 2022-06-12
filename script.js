$(function(){
    $('.phone_button').click(function(){
        ($(this).data('id') === '@')
        ? alert($('#number_input').text() + 'にかけます。')
        : $('#number_input').text($('#number_input').text() + $(this).data('id'));
    });
});