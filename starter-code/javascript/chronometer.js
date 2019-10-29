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
    let remainingSecs = Math.round(this.currentTime - (this.getMinutes() * 60));
    return remainingSecs;
  }

  twoDigitsNumber(digits) {
    let strDigits = String(digits);
    if (strDigits.length === 1) {
      return '0' + strDigits;
    } else if (strDigits.length === 2) {
      return strDigits;
    }

    // if (digits === 0) {
    //   return '00';
    // } else {
    //   let strDigits = String(digits);
    //   return (strDigits.length < 2) ? '0' + strDigits : strDigits;
    // }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {

  }
}
