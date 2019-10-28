const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');
let splitsToClear = document.getElementById('splits');
// const splits = document.getElementById('splits');
// let startingTime = Date.now();
// let today = new Date();
// let timeNow = `${today.getHours} : ${today.getMinutes} : ${today.getSeconds}`;
console.dir(splits);

function printTime() {
  printSeconds();
  printMinutes();
  printMilliseconds();
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
  let miliPP = chronometer.twoDigitsNumber(miliUnits).toString();
  milDec.innerHTML = miliPP[miliPP.length - 2]; //this cheating
  milUni.innerHTML = miliPP[miliPP.length - 1];
}

function printSplit() {
  chronometer.splitClick();
}

function clearSplits() {
  splitsToClear.innerHTML = `<ol id="splits"></ol>`;
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

let miliUnits = 0;

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === 'START') {
    chronometer.startClick();
    btnLeft.innerText = 'STOP';
    btnRight.innerText = 'SPLIT';
    btnLeft.className = 'btn stop';
    btnRight.className = 'btn split';
    t = setInterval(() => {
      printTime();
      miliUnits += 1;
    }, 1);
  } else {
    clearInterval(t);
    btnLeft.innerText = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerText = 'RESET';
    btnRight.className = 'btn split';

    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
