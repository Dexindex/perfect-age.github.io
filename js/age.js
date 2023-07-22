function age() {
  let input = document.querySelector("input");
  let age = input.value;
  var days = age * 365;
  var hours = days * 24;
  var minutes = hours * 60;
  var seconds = minutes * 60;

  document
    .getElementById("days")
	.textContent=("Your Age in Days is " + days + " days.");
  document
    .getElementById("hours")
    .textContent=("Your Age in hours is " + hours + " hours.");
  document
    .getElementById("minutes")
    .textContent=("Your Age in minutes is " + minutes + " minutes.");
  document
    .getElementById("seconds")
    .textContent=("Your Age in seconds is " + seconds + " seconds.");
}

function reset() {
  document.getElementById("days").innerHTML = " - ";
  document.getElementById("hours").innerHTML = " - ";
  document.getElementById("minutes").innerHTML = " - ";
  document.getElementById("seconds").innerHTML = " - ";
}

function cls() {
  window.close();
}

function big() {
  cc.innerHTML =
    "<style>body{padding: 0 !important;transition: .2s ease;}.container{height: 100vh;max-width: 100vw;}</style>";
}

function minizme() {
  cc.innerHTML = "<style>body{transition: .2s ease;}</style>";
}
