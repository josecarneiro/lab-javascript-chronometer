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
}

function printMinutes() {
  minDec.innerText=chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerText=chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerText=chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerText=chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printMilliseconds() {
  milDec.innerText=chronometer.twoDigitsNumber(chronometer.getMiliSeconds())[0]
  milUni.innerText=chronometer.twoDigitsNumber(chronometer.getMiliSeconds())[1]
}

function printSplit() {
  let $splitsIl = document.getElementById('splits')
  $splitsIl.innerHTML+=`
    <li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMiliSeconds())}</li>
  `
}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className.includes('start')){
    btnLeft.classList.remove('start')
    btnLeft.classList.add('stop')
    btnRight.classList.remove('reset')
    btnRight.classList.add('split')
    btnLeft.innerText = "STOP"
    btnRight.innerText = "SPLIT"
    chronometer.startClick();
    let interval = setInterval(() =>{
      printMinutes();
      printSeconds();
      printMilliseconds();
    },10)
  }else{
    btnLeft.classList.remove('stop')
    btnLeft.classList.add('start')
    btnRight.classList.remove('split')
    btnRight.classList.add('reset') 
    btnLeft.innerText = "START"
    btnRight.innerText = "RESET"
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className.includes('split')){
    printSplit();
  }else{
    chronometer.resetClick();
    printMinutes();
    printSeconds();
    printMilliseconds();
    let $splitsIl = document.getElementById('splits')
    $splitsIl.innerHTML='';
  }
});
