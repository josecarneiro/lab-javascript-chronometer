class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick () {
    this.intervalId = setInterval(() => { return this.currentTime += 1 }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - Math.floor(this.currentTime/ 60) * 60;
  }

  twoDigitsNumber(value) {
    if(value.toString().length < 2){
      return value= "0"+value;
    } else {
      return value.toString();
    }
  }

stopClick() {
  clearInterval(this.intervalId)
}

resetClick() {
  return this.currentTime = 0
}

  // splitClick() {
  // ..
  // }
}
