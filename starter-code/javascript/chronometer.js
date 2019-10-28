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

  twoDigitsNumber(value) {
    let $newString;
    value <= 9 ? $newString = `0${value}` : $newString = `${value}`;
    return $newString;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
  this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())[0]}${this.twoDigitsNumber(this.getMinutes())[1]}:${this.twoDigitsNumber(this.getSeconds())[0]}${this.twoDigitsNumber(this.getSeconds())[1]}`
  }
}
