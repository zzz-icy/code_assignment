$(document).ready(function () {

    var fingers = $(".display-fingers");
    var toes = $('.display-toes');
    
    // get num of seconds
    var seconds;

    $(".time-confirm-button ").find("button").on('click', () => {
        seconds = $('#seconds').val();
    });

    $(".time-reset-button").find("button").on('click', () => {
        $('#seconds').val('');

    });



    $("#restart").on('click', () => {

        fingers.css("background-color", "yellow");

    });


});