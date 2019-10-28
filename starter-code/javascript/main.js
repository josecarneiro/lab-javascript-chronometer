const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');
const splitsClear = document.getElementById('splits');


function printTime() {
  printMinutes()
  printSeconds()
//  printMilliseconds()
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

/* function printMilliseconds() {
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0]
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1]
} */

function printSplit() {
  chronometer.splitClick()
}

function clearSplits() {
  splitsClear.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerText = "STOP"
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT"
  btnRight.className = "btn split"
}

function setStartBtn() {
  btnLeft.innerText = "START"
  btnLeft.className = "btn start"
}

function setResetBtn() {
  btnRight.innerText = "RESET"
  btnRight.className = "btn reset"
}
let milli = 0

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  //console.dir(document.getElementById('btn-left'))
  if (btnLeft.innerText === "START") {
    let milli = 0
    setSplitBtn()
    setStopBtn()
    chronometer.startClick()
    setInterval(() => {
      printTime()
    }, 1);
  } else {
    setResetBtn()
    setStartBtn()
    chronometer.stopClick()
  }
 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
   if (btnRight.innerText === "RESET") {
    chronometer.resetClick()
    clearSplits()
  } else {
    printSplit()
  }
});
