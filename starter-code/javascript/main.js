const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');
const split = document.getElementById('splits'); 

function printTime(){ 
  printMinutes(); 
  printSeconds();
} 

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}; 

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]; 
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]; 
}; 

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', () => {


  if (btnLeft.innerText === "START"){ 
    chronometer.startClick();
    setInterval(() => { 
      printTime(); 
      }, 1);   
    btnLeft.innerText = "STOP"; 
    btnLeft.className = "btn stop";
    btnRight.innerText = "SPLIT";
    btnRight.className = 'btn split';
    

  } else { 
    chronometer.stopClick();
    btnLeft.innerText = "START";
    btnLeft.className = "btn start"; 
    btnRight.innerText = "RESET";
    btnRight.className = 'btn reset';

  }
}); 

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.innerText === "RESET"){ 
   chronometer.resetClick(); 
    btnRight.innerText = "SPLIT"; 
    btnRight.className = "btn split";

  } else { 
    chronometer.splitClick(); 
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";

  }
}); 
