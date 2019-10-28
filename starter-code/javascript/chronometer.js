//clearInterval(intervalId)
const splits = document.getElementById('splits');

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes  
  }

  getSeconds () {
    let seconds = this.currentTime % 60
    return seconds
  }

/*   getMilliseconds() {
    let milliseconds = this.currentTime * 1000 / 10;
    return milliseconds
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
}

  resetClick() {
    this.currentTime = 0;
  }

splitClick() {
  let splintsSec = this.twoDigitsNumber(this.getSeconds());
  let splintsMin = this.twoDigitsNumber(this.getMinutes());
  let splintsPrint = splintsMin + ":" + splintsSec;
  splits.innerHTML += `<li>${splintsPrint}</li>`;
}
}