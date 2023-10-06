document.getElementById('stopButton').onclick = lightRed;
document.getElementById('slowButton').onclick = lightYellow;
document.getElementById('goButton').onclick = lightGreen;

function lightRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function lightYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function lightGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}