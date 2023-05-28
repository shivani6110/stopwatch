window.onload = function () {

    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    let appendMinutes = document.getElementById("minutes");
    let appendSeconds  = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");
    let buttonStart = document.getElementById("btn-start");
    let buttonStop = document.getElementById("btn-stop");
    let buttonReset = document.getElementById("btn-reset");
    let interval;

    buttonStart.onclick = function () {

        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {

        clearInterval(interval);
    }

    buttonReset.onclick = function() {

        clearInterval(interval);
        minutes = "00";
        tens = "00";
        seconds = "00";
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }

    function startTimer() {
        tens++;

        if(tens <= 9)
        {
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9)
        {
            appendTens.innerHTML = tens;
        }
        if(tens > 99)
        {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9)
        {
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59)
        {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
    }
}