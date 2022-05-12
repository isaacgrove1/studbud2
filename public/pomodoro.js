document.getElementById("pomodoro-set-time").onclick = function() {
    var buttonStart = document.getElementById('pomodoro-start');
    const startingMinutesStudy = document.getElementById("studyTimeInput").value

    const startingMinutesBreak = document.getElementById("studyBreakInput").value
    const NumberSessions = document.getElementById("numSessInput").value
    var timeStudy = startingMinutesStudy * 60;
    var timeBreak = startingMinutesBreak * 60;

    const startingMinutesStudy2 = JSON.parse(JSON.stringify(startingMinutesStudy));
    const startingMinutesBreak2 = JSON.parse(JSON.stringify(startingMinutesBreak));
    var timeStudy2 = startingMinutesStudy2 * 60;
    var timeBreak2 = startingMinutesBreak2 * 60;

    const startingMinutesStudy3 = JSON.parse(JSON.stringify(startingMinutesStudy2));
    const startingMinutesBreak3 = JSON.parse(JSON.stringify(startingMinutesBreak2));
    var timeStudy3 = startingMinutesStudy3 * 60;
    var timeBreak3 = startingMinutesBreak3 * 60;

    var interval;
    var j = NumberSessions;

    // var totalTimeHour = NumberSessions * (timeStudy + timeBreak)

    const countdownEl = document.getElementById('pomodoro-countdown');


    // _________________ITERATION 1___________________

    function updateCountdownStudy() {
        const minutesStudy = Math.floor(timeStudy / 60);
        let seconds = timeStudy % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = minutesStudy + ":" + seconds;
        timeStudy--;
        if (seconds == 0 && minutesStudy == 0){
            clearInterval(interval); 
            interval = setInterval(updateCountdownBreak, 1000);
        }
    }

    function updateCountdownBreak() {
        const minutesBreak = Math.floor(timeBreak / 60);
        let seconds = timeBreak % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = minutesBreak + ":" + seconds;
        timeBreak--;
        if (seconds == 0 && minutesBreak == 0){
            // alert("done")
            clearInterval(interval); 
            j--
            iterate()
        }
    }


    // _________________ITERATION 2___________________

    function updateCountdownStudy2() {
        const minutesStudy2 = Math.floor(timeStudy2 / 60);
        let seconds = timeStudy2 % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = minutesStudy2 + ":" + seconds;
        timeStudy2--;
        if (seconds == 0 && minutesStudy2 == 0){
            clearInterval(interval); 
            interval = setInterval(updateCountdownBreak2, 1000);
        }
    }

    function updateCountdownBreak2() {
        const minutesBreak2 = Math.floor(timeBreak2 / 60);
        let seconds = timeBreak2 % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = minutesBreak2 + ":" + seconds;
        timeBreak2--;
        if (seconds == 0 && minutesBreak2 == 0){
            // alert("done")
            clearInterval(interval);
            j--
            iterate2()
        }
    }


    // _________________ITERATION 3___________________

    function updateCountdownStudy3() {
        const minutesStudy3 = Math.floor(timeStudy3 / 60);
        let seconds = timeStudy3 % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = minutesStudy3 + ":" + seconds;
        timeStudy3--;
        if (seconds == 0 && minutesStudy3 == 0){
            clearInterval(interval); 
            interval = setInterval(updateCountdownBreak3, 1000);
        }
    }

    function updateCountdownBreak3() {
        const minutesBreak3 = Math.floor(timeBreak3 / 60);
        let seconds = timeBreak3 % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = minutesBreak3 + ":" + seconds;
        timeBreak3--;
        if (seconds == 0 && minutesBreak3 == 0){
            // alert("done")
            clearInterval(interval);
            j--
        }
    }

    buttonStart.onclick = function() {
        interval = setInterval(updateCountdownStudy, 1000);
    }

    function iterate(){
        if (j>0){
            interval = setInterval(updateCountdownStudy2, 1000);
        }
    }

    function iterate2(){
        if (j>0){
            interval = setInterval(updateCountdownStudy3, 1000);
        }
    }
}