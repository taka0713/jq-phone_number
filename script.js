$(function(){

    $('#button_one').click(function(){
        console.log($(this).data('id'));
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(1);
        }else{
            catch_number = catch_number + '1';
            $('#number_input').text(catch_number);
        }
        
    });

    $('#button_two').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(2);
        }else{
            catch_number = catch_number + '2';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_three').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(3);
        }else{
            catch_number = catch_number + '3';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_four').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(4);
        }else{
            catch_number = catch_number + '4';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_five').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(5);
        }else{
            catch_number = catch_number + '5';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_six').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(6);
        }else{
            catch_number = catch_number + '6';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_seven').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(7);
        }else{
            catch_number = catch_number + '7';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_eight').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(8);
        }else{
            catch_number = catch_number + '8';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_nine').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(9);
        }else{
            catch_number = catch_number + '9';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_ten').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text('*');
        }else{
            catch_number = catch_number + '*';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_zero').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text(0);
        }else{
            catch_number = catch_number + '0';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_eleven').click(function(){
        let catch_number = $('#number_input').text();
        if(catch_number === ''){
            $('#number_input').text('#');
        }else{
            catch_number = catch_number + '#';
            $('#number_input').text(catch_number);
        }
    });

    $('#button_twelve').click(function(){
        let catch_number = $('#number_input').text();
        alert(catch_number + 'にかけます。');
    });
});