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
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60 ;
  }

  twoDigitsNumber(num) {
    if (num.toString().length === 1) {
      return '0' + num.toString();
    } else if (num.toString().length === 2) {
      return num.toString();
    } else {
      return '00';
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
  
  }

  // splitClick() {
  // ..
  // }
}
