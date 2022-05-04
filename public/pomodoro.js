document.getElementById("pomodoro-set-time").onclick = function() {
    var buttonStart = document.getElementById('pomodoro-start');
    const startingMinutes = document.getElementById("studyTimeInput").value
    let time = startingMinutes * 60;

    var interval;

    const countdownEl = document.getElementById('pomodoro-countdown');

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = minutes + ":" + seconds;
        time--;
    }

    buttonStart.onclick = function() {
        interval = setInterval(updateCountdown, 1000);
    }
}