class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick () {
    this.intervalId = setInterval(function() {
      this.currentTime += 1;
    },1000);
  }

  getMinutes() {
    this.currentTime /= 60;
    const minutes = Math.floor(this.currentTime);
    return minutes;
    }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
    }

  twoDigitsNumber(value) {
    if (value < 10) {
      return "0"+ `${value}`;
    } else {
      return `${value}`;
    }
  }


  stopClick() {
    clearInterval("this.intervalId");
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {
  // ..
  // }
}