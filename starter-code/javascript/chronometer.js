class Chronometer {

  constructor() {
    this.currentTime = 0;
  };

  startClick() {
    this.intervalId = setInterval(() => {
      return this.currentTime += 1;
    }, 1000);
  };

  twoDigitsNumber(value) {
    let numToString = '' + value;
    if (numToString.length === 1) {
      return numToString = "0" + value;
    } else {
      return numToString;
    }
  };

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  };

  getSeconds() {
    return this.currentTime % 60;
  };

  resetClick() {
    return this.currentTime = 0;
  };

  stopClick() {
    return clearInterval(this.intervalId); //Use clearInterval() to stop the time:
  };
};





  // splitClick() {
  // ..
  // }

