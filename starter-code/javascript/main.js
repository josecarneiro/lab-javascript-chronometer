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
  
  printMinutes();
  printSeconds();
  
  
}

function printMinutes() {
  
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0);
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1);
}

function printSeconds() {
  // console.log(chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1));
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0);
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.setAttribute("class", "btn split");
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.setAttribute("class", "btn start");
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.setAttribute("class", "btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains("start")) {
    chronometer.startClick();

    setInterval(e => {
      printTime();
    }, 1000);


    setSplitBtn();
    setStopBtn();
  } else {
    
    setResetBtn();
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // if(btnRight.classList.contains("split")) {
  //   setResetBtn();
  // } else {
  //   setSplitBtn();
  // }
});
