const chronometer = new Chronometer();
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const minDec = document.getElementById("min-dec");
const minUni = document.getElementById("min-uni");
const secDec = document.getElementById("sec-dec");
const secUni = document.getElementById("sec-uni");
const milDec = document.getElementById("mil-dec");
const milUni = document.getElementById("mil-uni");

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop";
  } else {
    btnLeft.innerText = "STOP";
    btnLeft.innerText = "START";
    btnLeft.className = "btn start";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText === "RESET") {
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
  } else {
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
  }
});
