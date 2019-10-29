class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);    
  }

  getMinutes() {
    return Math.floor((this.currentTime/100)/60)%60;
    
  }

  getSeconds() {
    if (this.currentTime === 0){
      return 0;
    } else {
      return parseInt(Math.floor((this.currentTime/100)%60));
    }
  }

  getMiliseconds()  {
    if (this.currentTime === 0){
      return 0;
    } else {
      return ((this.currentTime/100)%1).toFixed(2);
    }  
  }

  twoDigitsNumber(value) {
    if(value>9){
      return `${value}`;
    } else {
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
