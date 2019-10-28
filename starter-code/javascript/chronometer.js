class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId
  }
  
  startClick() {
    this.intervalId = setInterval(() =>{
      this.currentTime+=1;
    },10)
  };
  

  getMinutes() {
    let currentTimeMinutes = Math.floor(this.currentTime/100/60);
    return currentTimeMinutes
  }

  
  getSeconds() {
    let currentTimeSeconds = parseInt((this.currentTime/100/60 - this.getMinutes())*60);
    return currentTimeSeconds
  }

  getMiliSeconds(){
    let currentTimeMiliSeconds = parseInt((this.currentTime/100 - this.getSeconds())*100);
    return currentTimeMiliSeconds
  }

  

  twoDigitsNumber(value) {
    if(value<10){
      return `0${value}`;
    }else{
      return `${value}`;
    }
  }

  
  stopClick() {
    clearInterval(this.intervalId);
    //console.log('it stopped!')
  }
  
  
  resetClick() {
    this.currentTime = 0; 
  }

  /*
  splitClick() {
  
  }
  */
}
