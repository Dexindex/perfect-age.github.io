function age() {
  let input = document.querySelector("input");
  let age = input.value;
  var days = age * 365;
  var hours = days * 24;
  var minutes = hours * 60;
  var seconds = minutes * 60;

  document
    .getElementById("days")
    .textContent=(" عمرك بالأيام هو"+days +" يوم.");
  document
    .getElementById("hours")
    .textContent=(" عمرك بالساعات هو"+hours +" ساعة.");
  document
    .getElementById("minutes")
    .textContent=(" عمرك بالدقائق هو"+minutes +" دقيقة.");
  document
    .getElementById("seconds")
    .textContent=(" عمرك بالثواني هو"+seconds +" ثانية.");
}

function reset() {
  document.getElementById("days").innerHTML = " - ";
  document.getElementById("hours").innerHTML = " - ";
  document.getElementById("minutes").innerHTML = " - ";
  document.getElementById("seconds").innerHTML = " - ";
}

function cls() {
  window.close()
}

function big() {
  cc.innerHTML =
    "<style>body{padding: 0 !important;transition: .2s ease;}.container{height: 100vh;max-width: 100vw;}</style>";
}

function minizme() {
  cc.innerHTML = "<style>body{transition: .2s ease;}</style>";
}
