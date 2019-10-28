class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  // IMPORTANT: The setInterval will be assigned to our intervalId property, this way we will be able to clear it later on.

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    if (this.currentTime === 0){
      return 0;
    } else {
      return this.currentTime%60;
    }
  }

  twoDigitsNumber(value) {
    if(value>9){
      return `${value}`;
    } else{
      return "0" + value;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {
  // ..
  // }
}
