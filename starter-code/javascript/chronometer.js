class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    // if (this.currentTime / 1000 > 60) {
    return parseInt(this.currentTime / 60);
    // } else {
    //   return '00';
    // }
  }

  getSeconds() {
    // if (this.currentTime > 60) {
    return parseInt(this.currentTime % 60);
    // } else {
    //   return this.currentTime;
    // }
  }

  twoDigitsNumber(x) {
    if (x < 10) {
      let a = '0';
      let c = a + x;
      return c;
    } else {
      return x.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let splits = document.getElementById('splits');

    let seconds = this.twoDigitsNumber(this.getSeconds());
    let minute = this.twoDigitsNumber(this.getMinutes());
    let childToAppend = document.createElement('li');
    childToAppend.innerText = `${minute}:${seconds}:${miliPP}`;
    splits.appendChild(childToAppend);
  }
}
