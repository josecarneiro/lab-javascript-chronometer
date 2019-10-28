class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    const intervalID = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    this.currentTime = Math.floor(this.currentTime / 60);
    console.log(this.currentTime);
    return this.currentTime;
  }

  getSeconds() {
    this.currentTime = Math.floor(this.currentTime % 60);
    console.log(this.currentTime);
    return this.currentTime;
  }

  twoDigitsNumber(i) {
    if (i < 10) {
      let firstnumber = '0';
      let numberWithTwoDigits = firstnumber + i;
      return numberWithTwoDigits;
    } else {
      return i.toString();
  }
  };

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {

  }
}