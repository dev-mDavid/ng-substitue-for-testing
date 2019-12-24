export class RealSource {

  randomData() {
    let randomNum1To10 = Math.floor(Math.random() * 10) 
    function randomNum1To100() {
      return Math.floor(Math.random() * 100) 
    } 

    let arrayAmount = randomNum1To10;
    let randomArray = [];
    // let randomNum = new randomNum1To100();
    
    for (let index = 0; index < arrayAmount; index++) {
      randomArray.push(randomNum1To100());
    }

    return randomArray;

  }
  // randomData = [1, 2];

   
}
