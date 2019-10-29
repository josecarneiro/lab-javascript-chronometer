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
  printMilliseconds(chronometer);
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
  return `${minutes[0]}${minutes[1]}`;
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
  return `${seconds[0]}${seconds[1]}`;
}

function printMilliseconds() {
  const miliseconds = chronometer.twoDigitsNumber(chronometer.getMiliseconds());
  milUni.innerText = miliseconds[miliseconds.length-1];
  milDec.innerText = miliseconds[miliseconds.length-2];
  return `${miliseconds[miliseconds.length-2]}${miliseconds[miliseconds.length-1]}`;
}

function printSplit() {
  let newItem = document.createElement(`li`);
  newItem.innerHTML = `${printMinutes()}:${printSeconds()}:${printMilliseconds()}`;
  document.getElementById('splits').appendChild(newItem);
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.value = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.value = 'btn split';
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.value = 'btn start';
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList.value = 'btn reset'; 
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  setInterval(() => {printTime(chronometer);}, 0);    
  if(chronometer.currentTime === 0){
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    if (btnLeft.classList.contains('start')){
      chronometer.startClick();
      setStopBtn();
      setSplitBtn(); 
    } else {
      chronometer.stopClick();
      setStartBtn();
      setResetBtn();
    }
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')){ 
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});