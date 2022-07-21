function colorChange() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.color = "yellow";
}
function colorChange2() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.color = "blue";
}
function colorChange3() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.color = "green";
}
function colorChange4() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.color = "magenta";
}
function buttonSwitch() {
  event.preventDefault();
  document.getElementById("button1").onclick = colorChange5;
  document.getElementById("button2").onclick = colorChange6;
  document.getElementById("button3").onclick = colorChange7;
  document.getElementById("button4").onclick = colorChange8;
  document.getElementById("buttonSwitch").onclick = buttonSwitch2;
  document.getElementById("buttonSwitch").innerHTML =
    "Change functions of buttons to change text color.";
}

function colorChange5() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.backgroundColor =
    "red";
}
function colorChange6() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.backgroundColor =
    "gray";
}
function colorChange7() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.backgroundColor =
    "pink";
}
function colorChange8() {
  event.preventDefault();
  document.getElementsByClassName("mainConcept")[0].style.backgroundColor =
    "purple";
}
function buttonSwitch2() {
  event.preventDefault();
  document.getElementById("button1").onclick = colorChange;
  document.getElementById("button2").onclick = colorChange2;
  document.getElementById("button3").onclick = colorChange3;
  document.getElementById("button4").onclick = colorChange4;
  document.getElementById("buttonSwitch").onclick = buttonSwitch;
  document.getElementById("buttonSwitch").innerHTML =
    "Change functions of buttons to background color.";
}
var timeleft = 10;
var resetTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(resetTimer);
    window.location.reload();
  }
  timeleft -= 1;
}, 1000);
