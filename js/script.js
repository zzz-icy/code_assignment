$(document).ready(function () {

    var fingers = $(".display-fingers");
    var toes = $('.display-toes');

    // get seconds
    var seconds;

    $(".time-confirm-button ").find("button").on('click', () => {
        seconds = $('#seconds').val();
    });
    // reset seconds
    $(".time-reset-button").find("button").on('click', () => {
        $('#seconds').val('');
        // seconds = 0;
        fingers.css("background-color", "white");
        toes.css("background-color", "white");
    });


    $("#restart").on('click', () => {
        var inputNumber = $('#seconds').val();
        displayedNumber.text('0');
        timeCount(inputNumber);
    });

    function timeCount(seconds) {
        clearAllIntervals();
        var startNum = 1;
        var displayedNum = $('.dispaly-counter').find('p');

        var intervalId = setInterval(function () {
            // console.log(intervalId);
            // console.log('interval gets called');
            var currentNum = startNum++;
            // console.log(newNum);
            if (currentNum <= seconds) {
                if (currentNum % 5 === 0 && currentNum % 3 === 0) {
                    fingers.css("background-color", "rgb(180, 218, 240)");
                    toes.css("background-color", "rgb(180, 218, 240)");
                    displayedNumber.text(currentNum.toString());
                }
                else if (currentNum % 5 === 0) {
                    fingers.css("background-color", "white");
                    toes.css("background-color", "rgb(180, 218, 240)");
                    displayedNumber.text(currentNum.toString());
                }
                else if (currentNum % 3 === 0) {
                    fingers.css("background-color", "rgb(180, 218, 240)");
                    toes.css("background-color", "white");
                    displayedNumber.text(currentNum.toString());
                }
                else {
                    fingers.css("background-color", "white");
                    toes.css("background-color", "white");
                    displayedNumber.text(currentNum.toString());
                }
            }
           
                clearInterval(intervalId);
            
        }, 1000);
    }




    // to stop the counter
    clearInterval(myInterval);


});