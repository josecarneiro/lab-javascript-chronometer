const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
let minDec = document.getElementById('min-dec');
let minUni = document.getElementById('min-uni');
let secDec = document.getElementById('sec-dec');
let secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');
const li = document.getElementById('splits');

function printMinutes() {
  let getMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  document.getElementById('min-dec').innerText = getMinutes.charAt(0);
  document.getElementById('min-uni').innerText = getMinutes.charAt(1);
};


function printSeconds() {
  let getSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = getSeconds.charAt(0);
  secUni.innerText = getSeconds.charAt(1);
};

let a;
let b;
function printTime() {
  a = setInterval(() => { printSeconds() }, 1);
  b = setInterval(() => { printMinutes() }, 1);
  return a, b
};

function printSplit() {
  li.innerHTML += `<li>
  <span>${chronometer.twoDigitsNumber(chronometer.getMinutes())} minutes ${chronometer.twoDigitsNumber(chronometer.getSeconds())} seconds<span> 
</li>

  `
 }

/*function printMilliseconds() { }


function clearSplits() { }*/

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

console.log(chronometer.startClick())
// Start/Stop Button
btnLeft.addEventListener('click', () => { //I will need to do a setInterval here
  if (btnLeft.innerText === "START") {
    setStopBtn();
    printTime();
    chronometer.startClick();
  } else if (btnLeft.innerText === "STOP") {
    setStartBtn();
    clearInterval(a);
    clearInterval(b);  //--> what I need to do to stop the time is clear interval from print time
    chronometer.stopClick();
    console.log(chronometer.currentTime)
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === "RESET") {
    setSplitBtn();
    chronometer.resetClick();
  }
  else {
    setResetBtn();
    printSplit();
    chronometer.stopClick();
  }
}
);

