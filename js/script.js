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
            if (currentNum < seconds) {
                if (currentNum % 5 === 0 && currentNum % 3 === 0) {
                    fingersDiv.style.backgroundColor = 'cornflowerblue';
                    fingersDiv.style.color = 'white';
                    toesDiv.style.backgroundColor = 'cornflowerblued';
                    toesDiv.style.color = 'white';
                    displayedNumber.innerHTML = currentNum.toString();
                }
                else if (currentNum % 5 === 0) {
                    fingersDiv.style.backgroundColor = 'transparent';
                    fingersDiv.style.color = '#555';
                    toesDiv.style.backgroundColor = 'cornflowerblue';
                    toesDiv.style.color = 'white';
                    displayedNumber.innerHTML = currentNum.toString();
                }
                else if (currentNum % 3 === 0) {
                    toesDiv.style.backgroundColor = 'transparent';
                    toesDiv.style.color = '#555';
                    fingersDiv.style.backgroundColor = 'cornflowerblue';
                    fingersDiv.style.color = 'white';
                    displayedNumber.innerHTML = currentNum.toString();
                }
                else {
                    toesDiv.style.color = '#555';
                    fingersDiv.style.color = '#555';
                    toesDiv.style.backgroundColor = 'transparent';
                    fingersDiv.style.backgroundColor = 'transparent';
                    displayedNumber.innerHTML = currentNum.toString();
                }
            }
            if (currentNum == seconds) {
                if (newNum % 5 === 0 && newNum % 3 === 0) {
                    fingersDiv.style.backgroundColor = 'cornflowerblue';
                    fingersDiv.style.color = 'white';
                    toesDiv.style.backgroundColor = 'cornflowerblue';
                    toesDiv.style.color = 'white';
                    displayedNumber.innerHTML = currentNum.toString();
                }
                else if (currentNum % 5 === 0) {
                    fingersDiv.style.backgroundColor = 'transparent';
                    fingersDiv.style.color = '#555';
                    toesDiv.style.backgroundColor = 'cornflowerblue';
                    toesDiv.style.color = 'white';
                    displayedNumber.innerHTML = currentNum.toString();
                }
                else if (currentNum % 3 === 0) {
                    toesDiv.style.backgroundColor = 'transparent';
                    toesDiv.style.color = '#555';
                    fingersDiv.style.backgroundColor = 'cornflowerblue';
                    fingersDiv.style.color = 'white';
                    displayedNumber.innerHTML = currentNum.toString();
                }
                else {
                    fingersDiv.style.color = '#555';
                    toesDiv.style.color = '#555';
                    toesDiv.style.backgroundColor = 'transparent';
                    fingersDiv.style.backgroundColor = 'transparent';
                    displayedNumber.innerHTML = currentNum.toString();
                }
                displayedNumber.innerHTML = currentNum.toString();
                clearInterval(intervalId);
            }
        }, 1000);
    }




    // to stop the counter
    clearInterval(myInterval);


});