const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');


function printTime() {
  printSeconds(chronometer);
  printMinutes(chronometer);
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(chronometer.currentTime === 0){
    chronometer.startClick();
    
    btnLeft.innerText = "STOP";
    btnLeft.classList.value = 'btn stop';
    
    btnRight.innerText = "SPLIT";
    btnRight.classList.value = 'btn split';  
  } else {
    if (btnLeft.classList.contains('start')){
      chronometer.startClick();

      btnLeft.innerText = "STOP";
      btnLeft.classList.value = 'btn stop';
      
      btnRight.innerText = "SPLIT";
      btnRight.classList.value = 'btn split';
    } else {
      chronometer.stopClick();

      btnLeft.innerText = "START";
      btnLeft.classList.value = 'btn start';
      
      btnRight.innerText = "RESET";
      btnRight.classList.value = 'btn reset'; 
    }
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ..
});

setInterval(() => {
  printTime(chronometer);
}, 0);
