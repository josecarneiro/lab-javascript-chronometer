class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => { 
      this.currentTime += 1;
    },1000); 
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes; 
  } 

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  twoDigitsNumber(value) {
    let twoDigits = "0";
      if(value < 10){ 
        return twoDigits + value; 
      } else if (value >= 10) {
        return String(value); 
      }
  }

   stopClick() {
      clearInterval(this.intervalId);

  }

  resetClick() {
    this.currentTime = 0;
  } 
    

splitClick() {
  const minutes = chronometer.getMinutes();
  const seconds = chronometer.getSeconds();  
  const text = `${minutes} : ${seconds}`; 
  splits.innerText = text;
 }
}