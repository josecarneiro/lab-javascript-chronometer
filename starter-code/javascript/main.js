const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
let minDec = document.getElementById('min-dec');
let minUni = document.getElementById('min-uni');
let secDec = document.getElementById('sec-dec');
let secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');


function printTime() {
  printMinutes()
  printSeconds() 
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() { 
 secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
 secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}



function printMilliseconds() {
return chronometer.getSeconds() * 1000;
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}



// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === "START"){
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop"
    btnRight.innerText = "SPLIT"
    btnRight.className = "btn split"
    chronometer.startClick();
    setInterval(() => { printTime()}, 1000);
  } else {
    btnLeft.innerText = "START";
    btnLeft.className = "btn start"
    btnRight.innerText = "RESET"
    btnRight.className = "btn reset"
    chronometer.stopClick(); 
    chronometer.resetClick()
  }
  
});

console.log(chronometer);



// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ..
});
