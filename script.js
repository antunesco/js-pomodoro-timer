console.log("Hello world!");
var audio = new Audio("alarm-clock.mp3");
function startTimer() {
  // Pegando os valores e definindo a váriável 'seconds'
  hours = Number(document.getElementById("hours").value);
  minutes = Number(document.getElementById("minutes").value);
  seconds = 0;

  // Rodando o programa
  var x = setInterval(function () {
    if (minutes == 0 && seconds == 0) {
      hours = hours - 1;
      minutes = 60;
    }

    if (seconds == 0) {
      minutes = minutes - 1;
      seconds = 60;
    }

    seconds = seconds - 1;

    timerHours = hours < 10 ? "0" + hours : hours;
    timerMinutes = minutes < 10 ? "0" + minutes : minutes;
    timerSeconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerHTML =
      (timerHours != 0 ? timerHours + ":" : "") +
      timerMinutes +
      ":" +
      (seconds == 60 ? "00" : timerSeconds);

    if (hours == 0 && minutes == 0 && seconds == 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Timer has ended";
      audio.play();
    }
  }, 1000);
}
