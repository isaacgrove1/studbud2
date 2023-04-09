// initialise all values and create variables for appending numbers
var minutes = 00;
var seconds= 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
// use this to keep timer values in
var interval 

// function when click start button
function startTimer(){
  // starts updating tens column
  tens++;
  // Sets parameteres for certain columns to update at what point
  if(tens < 9){
    // ensures that when 10s less than 10, there is a 0 in front
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9){
    appendTens.innerHTML = tens;
  }
  // Changes seconds column when tens reaches 100
  if (tens > 99){
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
  // Changes minutes column when seconds is over 59
  if (seconds > 59){
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
}

// when click start, call function which is updating based on the parameters defined in StartTimer
buttonStart.onclick = function() {
    interval = setInterval(startTimer, 10);
}

// stop changing the interval
buttonStop.onclick = function () {
    clearInterval(interval)
  };

// Reset the timer back to original values when reset button clicked
buttonReset.onclick = function () {
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
};