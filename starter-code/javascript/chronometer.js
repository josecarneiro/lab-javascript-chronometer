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
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    return (num < 10 ? "0" : "") + num;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {
    
  // }
}
