class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1; },
      1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let remainingSecs = Math.floor(this.currentTime - (this.getMinutes() * 60));
    return remainingSecs;
  }

  twoDigitsNumber(digits) {
    let strDigits = String(digits);
    if (strDigits.length === 1) {
      return '0' + strDigits;
    } else if (strDigits.length === 2) {
      return strDigits;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
