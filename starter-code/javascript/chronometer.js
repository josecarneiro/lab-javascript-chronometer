class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.IntervalId;
    this.isPaused = false;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1; },
      1000);
  }

  // startClick() {
  //   setInterval(function() {
  //     this.currentTime += 1; },
  //     this.intervalId);
  // }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let remainingSecs = this.currentTime - (this.getMinutes() * 60);
    return remainingSecs;
  }

  twoDigitsNumber(digits) {
    if (digits === 0) {
      return '00';
    } else {
      let strDigits = String(digits);
      return (strDigits.length < 2) ? '0' + strDigits : strDigits;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.isPaused = false;
    this.currentTime = 0;
  }

  splitClick() {
    this.isPaused = true;
  }
}
