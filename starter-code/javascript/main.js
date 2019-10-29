const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');
const splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  // printMilliseconds();
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

function printMilliseconds() {
  milDec.textContent = chronometer.twoDigitsNumber(chronometer.currentTime).charAt(0);
  milUni.textContent = chronometer.twoDigitsNumber(chronometer.currentTime).charAt(1);
}

function printSplit() {
  splits.innerHTML += `
  <li>${chronometer.twoDigitsNumber(chronometer.getMinutes())} : ${chronometer.twoDigitsNumber(chronometer.getSeconds())}</li>
  `;
}

function clearSplits() {
  splits.innerHTML = "";
}

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
    chronometer.stopClick();
    setResetBtn();
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("split")) {
    printSplit()
    // setResetBtn();
  } else {
    clearSplits();
    chronometer.resetClick();
  }
});
