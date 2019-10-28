const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');
const splits =  document.getElementById('splits');

function printTime() {
}

function printMinutes() {
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {
}

function printSplit() {
  let $bulletPoint = document.createElement('li');
  $bulletPoint.textContent = chronometer.splitClick();
 splits.appendChild($bulletPoint);
}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {
  chronometer.resetClick();
  splits.innerHTML = "";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className.includes('start')) {
    chronometer.startClick();   
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.textContent = 'STOP'; 
    btnRight.classList.remove('reset')
    btnRight.classList.add('split')
    btnLeft.textContent = "STOP"
    btnRight.textContent = "SPLIT"    
    let interval = setInterval(() =>{
      printMinutes();
      printSeconds();
    }, 100)
  }
  else {
    chronometer.stopClick();
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.textContent = 'START';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.textContent = 'RESET';
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className.includes("split")) {
    printSplit();
  }
  else {
    setResetBtn();
  }
});