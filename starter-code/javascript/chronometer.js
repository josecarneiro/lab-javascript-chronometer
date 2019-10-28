class Chronometer {
  constructor(){
    this.currentTime = 0,
    this.intervalId 
  }

  startClick(){
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    },1000);
  }

  getMinutes(){
    let minute = Math.floor(this.currentTime/60);
    return minute;
  }


  getSeconds() {
  let seconds = Math.floor((this.getMinutes()/60)*60);
  return seconds += this.currentTime;
  }

  twoDigitsNumber(value) {
   if (value < 10){
     return `0${value}`
   } else {
     return `${value}`
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
