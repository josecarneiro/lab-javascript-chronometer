const chronometer = new Chronometer();
console.log(chronometer)
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
console.log(minDec)
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');

function printTime() {}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {}

function printSplit() {
  // const for minutes
  // const for secs
  //const text = minutes:seconds

}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop";
    chronometer.startClick();
    setInterval(() => {
      printMinutes();
      printSeconds();
    }, 1000);
    
  } else if (btnLeft.innerText === "STOP") {
    btnLeft.innerText = "START";
    btnLeft.className = "btn start";
    chronometer.stopClick();
    
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === "RESET") {
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
    chronometer.resetClick();
  } else if (btnRight.innerText === "SPLIT") {
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
    chronometer.splitClick();
  }
});