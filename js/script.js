$(document).ready(function () {

    var fingers = $(".display-fingers");
    var toes = $('.display-toes');
    var displayedNum = $('#displayNum');
    

    $(".time-confirm-button ").find("button").on('click', () => {
        var seconds = $('#seconds').val();
        // console.log(seconds);
        timeCount(seconds);
        
    });
    // reset seconds
    $(".time-reset-button").find("button").on('click', () => {
        clearAllIntervals();
        $('#seconds').val('');
        displayedNum.text('0');        
        // seconds = 0;
        fingers.css("background-color", "white");
        toes.css("background-color", "white");
    });


    $("#restart").on('click', () => {
        var inputNumber = $('#seconds').val();
        displayedNum.text('0');
        timeCount(inputNumber);
    });

    function timeCount(seconds) {
        clearAllIntervals();
        var startNum = 0;

        var intervalId = setInterval(function () {
            console.log(intervalId);
            console.log('interval gets called');
            var currentNum = startNum++;
            console.log(currentNum);
            // console.log(seconds);
            if (currentNum < seconds) {
                if (currentNum % 5 === 0 && currentNum % 3 === 0) {
                    fingers.css("background-color", "rgb(180, 218, 240)");
                    toes.css("background-color", "rgb(180, 218, 240)");
                    displayedNum.text(currentNum.toString());
                }
                else if (currentNum % 5 === 0) {
                    fingers.css("background-color", "white");
                    toes.css("background-color", "rgb(180, 218, 240)");
                    displayedNum.text(currentNum.toString());
                }
                else if (currentNum % 3 === 0) {
                    fingers.css("background-color", "rgb(180, 218, 240)");
                    toes.css("background-color", "white");
                    displayedNum.text(currentNum.toString());
                }else{
                    fingers.css("background-color", "white");
                    toes.css("background-color", "white");
                    displayedNum.text(currentNum.toString());
    
                    // clearInterval(intervalId);
                }
               
            }
            if (currentNum == seconds) {
                if (currentNum % 5 === 0 && currentNum % 3 === 0) {
                    fingers.css("background-color", "rgb(180, 218, 240)");
                    toes.css("background-color", "rgb(180, 218, 240)");
                    displayedNum.text(currentNum.toString());
                }
                else if (currentNum % 5 === 0) {
                    fingers.css("background-color", "white");
                    toes.css("background-color", "rgb(180, 218, 240)");
                    displayedNum.text(currentNum.toString());
                }
                else if (currentNum % 3 === 0) {
                    fingers.css("background-color", "rgb(180, 218, 240)");
                    toes.css("background-color", "white");
                    displayedNum.text(currentNum.toString());
                }else{
                    fingers.css("background-color", "white");
                    toes.css("background-color", "white");
                    displayedNum.text(currentNum.toString());
    
                }
                displayedNum.text(currentNum.toString());
                
                clearInterval(intervalId);
                
            }
           
                
            
        }, 1000);
      
    }


    function clearAllIntervals() {
        // Make sure to clear out all old intervals to restart or start again
        for (var i = 1; i < 99999; i++) {
            clearInterval(i);
        }
    }
});



