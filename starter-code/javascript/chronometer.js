//clearInterval(intervalId)
const splits = document.getElementById('splits');

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId
    // this.milli = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      // this.milli += 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor((this.currentTime / 60));
    return minutes  
  }

  getSeconds () {
    let seconds = (this.currentTime % 60)
    return seconds
  }

/*    getMilliseconds() {
    let milliseconds = this.milli
    if (milliseconds = 999) {
      milliseconds = 0
    } else {
      return milliseconds
    }   
  } */

  twoDigitsNumber(value) {
    let stringNumber = "0";
    if (value < 10) {
      return stringNumber + value
    } else {
      return String(value)
    }
}

stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMil);
}

  resetClick() {
    this.currentTime = 0;
    this.currentMil = 0;
  }

splitClick() {
  let splintsSec = this.twoDigitsNumber(this.getSeconds());
  let splintsMin = this.twoDigitsNumber(this.getMinutes());
  let splintsPrint = splintsMin + ":" + splintsSec
  splits.innerHTML += `<li>${splintsPrint}</li>`;
}
}