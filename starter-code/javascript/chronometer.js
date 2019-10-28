class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick() {
    this.intervalId = setInterval(() => {return this.currentTime += 1}, 1000)
    }
  
 
  getMinutes() {
  let minutes = Math.floor(this.currentTime / 60);
  return minutes;
   
   }

   getSeconds() {
   let seconds = this.currentTime - (Math.floor(this.currentTime / 60)*60);
   return seconds; 
   }

   twoDigitsNumber(value) {
  if (value.toString().length < 2) {
    return "0" + value 
  } else {
    return value.toString()
  }
  }

   stopClick() {
  clearInterval(this.intervalId)
   }

  resetClick() {
  this.currentTime = 0;
   }

  // splitClick() {
  // ..
  // }
}
