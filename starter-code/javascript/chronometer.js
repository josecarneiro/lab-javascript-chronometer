class Chronometer {
  constructor() {
    this.currentTime = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    });
  }

  getMinutes() {
    let timeInMinutes = Math.floor(this.currentTime / 60);
    return timeInMinutes;
  }

  getSeconds() {
    let timeInSeconds = this.currentTime % 60;
  
  return timeInSeconds;
  }

   twoDigitsNumber(value) {
    let twoDigit = "0"
    if (value <= 9) {
     return twoDigit + value;
    } else if (value > 9) {
      return String(value);
    }
   }
  
    stopClick() {
      clearInterval(this.intervalId);
   }

  resetClick() {
    this.currentTime = 0;

    }
  
   }

  

  // splitClick() {
  // ..
  // }

