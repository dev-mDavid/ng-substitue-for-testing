export class Source {

  sourceData() {
    let randomNum1To10 = Math.floor(Math.random() * 10) 
    function randomNum1To100() {
      return Math.floor(Math.random() * 100) 
    } 

    let arrayAmount = randomNum1To10;
    let randomArray = [];
    
    for (let index = 0; index < arrayAmount; index++) {
      randomArray.push(randomNum1To100());
    }

    return randomArray;

  }
  
}
